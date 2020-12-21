import PropsTypes from 'prop-types';
import Quagga from 'quagga';
import React, { useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { validateIsbn } from '../../services/books';
import { Container, ScanMarker, Video } from './styles';


function Scanner({ onScann }) {
  let scanAttemps = 0

  const onDetect = result => {
    Quagga.offDetected(onDetect)

    const isbn = result.codeResult.code

    if (validateIsbn(isbn)) {
      onScann(isbn)
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
          <Link className="digitcod" to="/">
            <FaRegEdit size="26" color="#2ecc71" />
          </Link>

          <img src="../../../assets/marker.svg"
            alt="Marca para leitura do codigo"
            width="256"
            height="256"
          />

          <p className="label">Centralize o código no centro da marca acima, para realizar a leitura.</p>

          <img
            className="logo"
            src="../../../assets/logo-write.svg"
            alt="Logo do site"
            width="128"
            height="64"
          />

          <span className="version">
            version: 1.3.5 de 21/12/2020
          </span>
        </ScanMarker>
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScann: PropsTypes.func
}

export default Scanner;
