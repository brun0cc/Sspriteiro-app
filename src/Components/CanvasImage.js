import React from "react";
import "../App.css";

const CanvasImages = ({ startDrawing, endDrawing,
    draw,canvasRef,pxSprite }) => {
return (
	      <div>
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
        
);
};

export default CanvasImages;
