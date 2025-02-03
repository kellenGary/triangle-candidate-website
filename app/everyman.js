
export default function Everyman() {
    return (
        <div className={"flex flex-col items-center align-middle pt-40"}>
            <h1 className={"p-10 text-6xl underline underline-offset-auto"}>Everyman</h1>
            <iframe
                src="https://en.wikipedia.org/wiki/Everyman_(15th-century_play)"
                width="600"
                height="500"
                title="My Iframe"
                style={{ border: "none" }}
            />
        </div>
    )
}