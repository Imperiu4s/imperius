<?php
// A Discord webhook URL
$webhook = "https://discord.com/api/webhooks/1471263896831529196/GGuqdMHsopW-BBnuWf4vj92qc1E8nWKcBfm_MHaTnKgBkKkFK9-4K5-E_SkE7ggv4heY";

// A beérkező JSON adat beolvasása
$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "Nincs megadva";
$email = $data["email"] ?? "Nincs megadva";
$topic = $data["topic"] ?? "Nincs megadva";
$message = $data["message"] ?? "Nincs üzenet";

// Discord embed payload
$payload = [
    "embeds" => [
        [
            "title" => "📩 Új üzenet érkezett a weboldalról",
            "color" => 5814783,
            "fields" => [
                ["name" => "Név / IGN", "value" => $name],
                ["name" => "Email", "value" => $email],
                ["name" => "Téma", "value" => $topic],
                ["name" => "Üzenet", "value" => $message]
            ],
            "timestamp" => date("c")
        ]
    ]
];

// Curl kérés a Discord felé
$ch = curl_init($webhook);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Válasz visszaküldése a JS-nek
http_response_code($httpcode);
echo $response;
