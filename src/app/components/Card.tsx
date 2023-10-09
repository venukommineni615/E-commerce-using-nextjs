export default function Card() {
  return (
    <div className="card card-compact w-72   bg-second ">
        <img className="w-auto rounded-2xl"
          src="data:image/jpeg;base64,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"
          alt="item"
        />
      <div className="card-body h-auto">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}