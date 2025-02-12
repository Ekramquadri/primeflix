import { useState } from "react";
import { Card, CardContent, TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleLogin = () => {
        if (email === "admin" && password === "admin@123") {
            history.push("/trending");
        }
        else {
            setError("Please enter correct email/password");
        }
    };

    return (
        <div style={{
            position: "relative",
            top: -27,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "url('/Background.webp') center/cover no-repeat"
        }}>
            <Card style={{ width: 350, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", backgroundColor: "#2D3748", color: "#E2E8F0" }}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    {error && (
                        <Typography variant="body2" color="error" align="center" gutterBottom>
                            {error}
                        </Typography>
                    )}
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{ style: { color: '#CBD5E0' } }}
                        InputProps={{ style: { color: '#E2E8F0', backgroundColor: '#4A5568' } }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{ style: { color: '#CBD5E0' } }}
                        InputProps={{ style: { color: '#E2E8F0', backgroundColor: '#4A5568' } }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        style={{ marginTop: 20, backgroundColor: "#4C51BF", color: "#fff" }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
