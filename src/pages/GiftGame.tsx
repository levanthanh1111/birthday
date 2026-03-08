import LuckyCardGame from "../components/LuckyCardGame";

export default function GiftGame() {

    const rewards = [
        "100k 💵",
        "200k 💵",
        "500k 💵",
        "1 cái hôn má 😘"
    ];

    return <LuckyCardGame rewards={rewards} />;
}