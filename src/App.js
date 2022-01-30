import logo from './logo.svg';
import './App.css';
import CanvasImage from "./Components/CanvasImage";
 
import { useEffect, useRef, useState, Component } from "react";

class ponto{
  x ;
  y ;

  constructor(px,py)
  {
    this.x = px;
    this.y = py;
  }


 
}

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  var pAnterior = new ponto(-1,-1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(1);
  const [contBrushes, setBushCount] = useState(16);
  const [pxSprite, setPxSprite] = useState(1000);
  
  function rotate(index, px, py)
  {
    
    var imagem = document.getElementById('IMAGEM');
    var angulo = (((360/contBrushes)*index)*Math.PI)/180;

    px = px-imagem.width/2;
    py = py-imagem.height/2;
     
     var x =( px*Math.cos(angulo)-py*Math.sin(angulo) )+ imagem.width/2;
     
     var y =( px*Math.sin(angulo)+py*Math.cos(angulo))+ imagem.height/2;
     
     var pnt = new ponto(x,y);
     return pnt;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  // Function for starting the drawing
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
    var tam = document.getElementById('v_tamanho');
    var qnt = document.getElementById('v_quantidade');
    var cor = document.getElementById('v_cor');
    setLineColor(cor.value);
    setLineWidth(tam.value);
    setBushCount(qnt.value);


    ctxRef.current.moveTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );

    pAnterior = new ponto(e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY);

     
 
    
    setIsDrawing(true);
   // document.getElementById('xy').value = pontAnterior.pontoY;

    ctxRef.current.lineTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );

     for(var i=0; i< contBrushes; i++)
     {
      var p = rotate(i,pAnterior.x, pAnterior.y);
      ctxRef.current.moveTo(
        p.x, 
        p.y
      );

      ctxRef.current.lineTo(
        p.x, 
        p.y
      );

     ctxRef.current.stroke();
    }
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );

    ctxRef.current.stroke();

  };
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };
  
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    var pontoAtual ;
    pontoAtual = new ponto(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
    

     
    if((pAnterior.x === -1 && pAnterior.y === -1) || (Math.abs(pAnterior.x-pontoAtual.x)>pxSprite/2)
    || (Math.abs(pAnterior.y-pontoAtual.y)>pxSprite/2))
    {
      pAnterior = pontoAtual;
    }

    ctxRef.current.moveTo(
      pAnterior.x, 
      pAnterior.y
    );
    ctxRef.current.moveTo(
      pAnterior.x, 
      pAnterior.y
    );

    ctxRef.current.stroke();
    for(var i=0; i< contBrushes; i++)
    {
     var pa = rotate(i,pAnterior.x, pAnterior.y);
     var pp = rotate(i,pontoAtual.x, pontoAtual.y);
     ctxRef.current.moveTo(
       pa.x, 
       pa.y
     );
     ctxRef.current.lineTo(
       pp.x, 
       pp.y
     );
     ctxRef.current.stroke();
  
    }

    pAnterior = pontoAtual;
      
    ctxRef.current.stroke();
    copyCanvas();
  };

  const saveimage = (e) => 
  {
    var imagem = document.getElementById('IMAGEM');
    var svImage = imagem.toDataURL('image/png');
    const w = window.open('about:blank', 'image from canvas');
    w.document.write("<img src='"+svImage+"' alt='from canvas'/>");
  };

  const setTamanho = (e) => {
    var tam = document.getElementById('tamanho');
    
    if(e.target.value>9)
    tam.textContent ="Tamanho: "+e.target.value;
    else
    tam.textContent = "Tamanho: 0"+e.target.value;
    setLineWidth(e.target.value);
  }

  const setQuantidade = (e) => {
    var tam = document.getElementById('quantidade');
    
    if(e.target.value>9)
    tam.textContent ="Quantidade: "+e.target.value;
    else
    tam.textContent = "Quantidade: 0"+e.target.value;
    setBushCount(e.target.value);
  }

  const setPixelsSprite = (e) => {
    var tam = document.getElementById('sprite');
    if(e.target.value>9)
    tam.textContent ="sprite: "+e.target.value;
    else
    tam.textContent = "sprite: 0"+e.target.value;
    setPxSprite(e.target.value);
  }

  function copyCanvas()
  {
    var lcanvas = document.getElementsByClassName("area");
    const canvas = canvasRef.current;

    for(var i=0; i< lcanvas.length; i++)
    {
      lcanvas[i].getContext("2d").drawImage(canvas, 0,0, pxSprite, pxSprite);
    }

    
 
  }
  function initCanvas()
  {
    ctxRef.current.beginPath();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
    var tam = document.getElementById('v_tamanho');
    var qnt = document.getElementById('v_quantidade');
    var cor = document.getElementById('v_cor');
    setLineColor(cor.value);
    setLineWidth(tam.value);
    setBushCount(qnt.value);
  }
  
  return (
    <div className="App">
      <h1 id="teste">SPRITEIRO</h1>
      <div className="draw-area" >
       <div className='Menu'>
       <label id="sprite">sprite: 1000px</label>
        <input
          type="range"
          min="16"
          max="1000"
          defaultValue={lineWidth}
          onChange={setPixelsSprite}
          width={"100px"}
        />
       
       <label>Cor</label>
        <input id="v_cor"
          type="color"
          onChange={(e) => {
          setLineColor(e.target.value);
          }}
        /><label id="tamanho">Tamanho: 05</label>
        <input  id="v_tamanho"
          type="range"
          min="1"
          max="20"
          defaultValue={lineWidth}
          onChange={setTamanho}
        />
        <label id="quantidade">Quantidade: 16</label>
        <input id="v_quantidade"
          type="range"
          min="1"
          max="36"
          defaultValue={contBrushes}
          onChange={setQuantidade}
        />
        <button onClick={saveimage}> save</button>
        </div >
        <div>
        <CanvasImage
          startDrawing={startDrawing}
          endDrawing={endDrawing}
          draw={draw}
          ref={canvasRef}
          pxSprite={pxSprite}
        />   
        <canvas id = "IMAGEM"
          className="area"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={pxSprite}
          height={pxSprite}
        />   
        <br></br>
        <canvas id = "IMAGEM"
          className="area"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={pxSprite}
          height={pxSprite}
        />  
        <canvas id = "IMAGEM"
          className="area"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={pxSprite}
          height={pxSprite}
        />  
        </div>   
      </div>
    </div>
  );
}

export default App;
