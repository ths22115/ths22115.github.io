export default function PieceDetails({ piece, titleClassName = "piece-title" }) {
  return (
    <div className="details details-active piece-details">
      <div className={titleClassName}>{piece.title}</div>
      <div className="expanded piece-expanded">
        <div className="piece-subtitle">
          <div className="piece-type">{piece.type}</div>
          <div className="piece-date">{piece.date}</div>
        </div>
        {/* {piece.desc ? <div className="piece-desc">{piece.desc}</div> : null} */}
        {/* <div className="piece-header">Background</div> */}
        {piece.background ? <div className="piece-background">{piece.background}</div> : null}
        
        {piece.process ? 
          <div className="piece-process">
            <div className="piece-header">Process</div>
            {piece.process}
          </div> 
        : null}

        {piece.processImages ? 
          <div className="piece-images piece-process-images">
            {piece.processImages.map((image, index) => (
                <img className="piece-image" key={index} src={image.src} alt={image.alt} />
            ))}
          </div> 
        : null}

        {piece.result ? 
          <div className="piece-result">
            <div className="piece-header">Result</div>
            {piece.result}
          </div> 
        : null}

        {piece.resultImages ? <div className="piece-images piece-result-images">
            {piece.resultImages.map((image, index) => (
                <img className="piece-image" key={index} src={image.src} alt={image.alt} />
            ))}
        </div> : null}
      </div>
    </div>
  );
}
