
export async function GET() {
    const users = [
        {id: 1, name: 'Alice', score: '10/10'},
        {id: 2, name: 'Bob', score: '9/10'},
    ];

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}