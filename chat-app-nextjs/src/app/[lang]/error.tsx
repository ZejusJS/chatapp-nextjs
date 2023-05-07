'use client';

const error = ({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) => {
    console.log(error)
    
    return (
        <main>
            <h2>ERRRORRR!!!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    )
}

export default error