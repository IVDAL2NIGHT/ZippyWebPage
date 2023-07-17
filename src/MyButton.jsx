import { Button } from "react-bootstrap";
import "./MyButton.css";

export const MyButton = ({ text }) => {
    return (
        <Button className="btn-primary">{text}</Button>
    );
}

