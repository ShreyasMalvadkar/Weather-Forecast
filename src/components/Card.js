export default function Card({ date, iconPhrase, minTempStr, maxTempStr }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <i>{date}</i>
          <br />
          {iconPhrase}
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <div>
              {minTempStr} / {maxTempStr}
            </div>
          </blockquote>
        </div>
      </div>
    </>
  );
}
