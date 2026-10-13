import Media from "./MediaDisplay.tsx";

function App() {
    return (
        <>
            <h1>Filmy</h1>
            <br />
            <Media image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10" name="Suzume" release_date={2022} />
            <Media image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnqljhomUl21gL9DD26rtcKhOozFSaN2Eqqw1OHSYgkHAg2ZS8MKkUzcu7eJZBAT-PE_aZM_PnS5kXer6jn-nsxn4CId_ByVWlijNr2U&s=10" name="The Matrix" release_date={1999} />
            <Media image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsBuU4tpA_ap_kNzP0k_N_e3AiaF3CNYc9X3kdDHPzthAd42HqeXMKeBdKAxJK4kWHq7aOQ&s=10" name="Monty Python and the Holy Grail" release_date={1975} />
        </>
    );
}

export default App
