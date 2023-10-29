export default function Poke() {
    const number = Math.floor(Math.random() * 151) + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    return (
        <>
            <div className="Poke" style={{ border: "1px solid black", width: "300px" }}>
                <h1 style={{ color: "blue" }}>POKEMON #{number}</h1>
                <img style={{ width: "200px" }} src={url}></img>
            </div>
        </>
    )
}