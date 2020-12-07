import React, { useEffect } from 'react';
import PropsTypes from 'prop-types'
import Quagga from 'quagga';

import { validateIsbn } from '../../services/books'
import { Video, Container, ScanMarker } from './styles';

function Scanner({ onScann }) {
  let scanAttemps = 0

  const onDetect = result => {
    Quagga.offDetected(onDetect)

    const isbn = result.codeResult.code

    if (validateIsbn(isbn)) {
      onScann(isbn)
      // alert(`Código ISBN válido ${isbn}`)
      return
    } else {
      if (!validateIsbn(isbn)) {
        alert(`Código ISBN inválido!! - ${isbn}`)
      }

      if (scanAttemps >= 3) {
        alert(`Ops: ${scanAttemps} tentativas sem sucesso, tente novamente!!`)
      }
    }

    scanAttemps++
    Quagga.onDetected(onDetect)
  }

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: "live",
            type: "LiveStream",
            target: document.querySelector("#video"),
            constraints: {
              facingMode: 'environment'
            }

          },

          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader']
          }
        },

        err => {
          if (err) {
            console.log(err)
            alert('Erro ao abrir a comera do dispositivo, por favor dê permissão: ' + err)
            return
          }

          Quagga.start()
        },

        Quagga.onDetected(onDetect)
      )
    }
  }, [])

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img src="../../../assets/scan-marker-write.svg"
            alt="Marca para leitura do codigo"
            width="350"
            height="250"
          />
          <p className="label">Centralize o código no centro da marca acima, para realizar a leitura.</p>
        </ScanMarker>

        <img
          className="logo"
          src="../../../assets/logo.svg"
          alt="Logo do site"
          width="128"
          height="64"
        />

        <span className="version">
          version: 0.1.0 de 01/12/2020
        </span>
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScann: PropsTypes.func
}

export default Scanner;
