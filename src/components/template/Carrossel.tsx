"use client";
import {
  Children,
  cloneElement,
  JSX,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Wrap from "./Wrap";
import Container from "./Container";
import Flex from "./Flex";
import { cn } from "@/utils/cn";
import { IconCaretLeft, IconCaretRight } from "@tabler/icons-react";

interface CarrosselProps {
  children: JSX.Element[];
  slideAutomatico?: boolean;
}

function BottaoLateral(props: {
  esquerda?: boolean;
  direita?: boolean;
  children: ReactNode;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={cn(
        `goup absolute top-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`,
        { "left-0": props.esquerda, "right-0": props.direita },
      )}
    >
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white group-hover:bg-gray-800/60`}
      >
        {props.children}
      </span>
    </button>
  );
}

export default function Carrossel({
  children,
  slideAutomatico,
}: CarrosselProps) {
  const carrosselRef = useRef<HTMLDivElement | null>(null);
  const intervaloRef = useRef<NodeJS.Timeout>(undefined);
  const animacaoRef = useRef<HTMLDivElement | null>(null);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const NUMERO_DE_ITENS = children.length;
  const TEMPO = 5000;

  function iniciarSlide() {
    if (!slideAutomatico) return;
    if (animacaoRef.current) {
      animacaoRef.current.style.display = "block";
    }
    intervaloRef.current = setInterval(() => {
      if (animacaoRef.current) {
        animacaoRef.current.style.display = "block";
      }
      proximoSlide();
    }, TEMPO);
  }

  function pararSlide() {
    if (animacaoRef.current) {
      animacaoRef.current.style.display = "none";
    }
    return clearInterval(intervaloRef.current);
  }

  useEffect(() => {
    iniciarSlide();
    return () => pararSlide();
  }, [NUMERO_DE_ITENS]);

  useEffect(() => {
    if (!carrosselRef.current) return;
    const filhos = Array.from(carrosselRef.current.children);
    const largura = carrosselRef.current.offsetWidth;
    filhos.forEach((filho: any, indice: number) => {
      filho.style.transform = `translatex(${(indice - indiceAtual) * largura})px`;
    });
  }, [indiceAtual]);

  function proximoSlide() {
    setIndiceAtual((inidiceAnterior: number) => {
      return inidiceAnterior === NUMERO_DE_ITENS - 1 ? 0 : inidiceAnterior + 1;
    });
  }

  function slideAnterior() {
    setIndiceAtual((inidiceAnterior: number) => {
      return inidiceAnterior === 0 ? NUMERO_DE_ITENS - 1 : inidiceAnterior - 1;
    });
  }

  return (
    <Wrap className="relative">
      <Container className="relative">
        <Wrap>
          <div onMouseEnter={pararSlide} onMouseLeave={iniciarSlide}>
            <div className="relative rounded-lg mb-5" ref={carrosselRef}>
              {Children.map(children, (filho: JSX.Element, i) => {
                const propsFilho = filho.props;
                return cloneElement(filho, {
                  ...propsFilho,
                  className: `${i === indiceAtual ? "" : "hidden"}`,
                });
              })}
            </div>
            <Flex className="bottom-5 z-30 gap-2">
              {Array.from({ length: NUMERO_DE_ITENS }).map((_, i) => {
                return (
                  <button
                    key={i}
                    className={cn(
                      "h-3 w-3 rounded-full cursor-pointer bg-gray-800",
                      {
                        "bg-gray-500": i === indiceAtual,
                      },
                    )}
                    onClick={() => setIndiceAtual(i)}
                  />
                );
              })}
            </Flex>
          </div>
        </Wrap>
        <Wrap className="absolute h-1 bottom-0">
          <div
            ref={animacaoRef}
            onAnimationEnd={() => {
              animacaoRef.current!.style.display = "none";
            }}
            className="rounded-lg h-full animate-timer bg-gray-800"
          ></div>
        </Wrap>
      </Container>
      <BottaoLateral
        esquerda
        onClick={slideAnterior}
        onMouseEnter={pararSlide}
        onMouseLeave={iniciarSlide}
      >
        <IconCaretLeft size={20} />
        <span className="hidden">Anterior</span>
      </BottaoLateral>
      <BottaoLateral
        direita
        onClick={proximoSlide}
        onMouseEnter={pararSlide}
        onMouseLeave={iniciarSlide}
      >
        <IconCaretRight size={20} />
        <span className="hidden">Proximo</span>
      </BottaoLateral>
    </Wrap>
  );
}
