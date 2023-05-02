const Forecast = ({data}) => {
    return (
        <>
        {data.list.slice(0,3).map((item,idx) =>
            <div className="other-forecast" key={idx}>
                
            </div>
        )}
        </>
    );
}

export default Forecast;