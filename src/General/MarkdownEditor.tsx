import React, { useState, useRef, useEffect } from "react";
import { ButtonGroup, Button, Paper, TextField, Card } from "@mui/material";
import MuiMarkdown from "mui-markdown";

// need to return new cursor location too
const markdownWithType = (type: string, text: string) => {
    switch (type) {
        case "bold":
            return `**${text}**`;
        case "italic":
            return `*${text}*`;
        // case "underline":
        //     return `_${text}_`;
        case "header1":
            return `#### ${text}`;
        case "header2":
            return `##### ${text}`;
        case "header3":
            return `###### ${text}`;
        case "link": 
            return `[${text.length > 0 ? text : "הכנס תיאור קישור"}](הכנס כתובת קישור)`;
        case "image": 
            return text + "[](הכנס כתובת תמונה)";
        default:
            return text;
    }
};


const MarkdownEditor: React.FC = () => {
    const textRef = useRef<HTMLTextAreaElement>();
    const [markdownText, setMarkdownText] = useState<string>("");
    const [newCursorLocation, setNewCursorLocation] = useState<number>(0);

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarkdownText(e.target.value);
    };

    const insert = (type: string) => {
        const textarea = textRef.current;
            if (!textarea) return;

        // indexes of part of text to make bold (if no text was selected but just a cursor location - start and end will share index)
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        const selectedText = markdownText.substring(start, end);

        // just marking the selected text as bold
        const newText = markdownText.substring(0, start) + markdownWithType(type, selectedText) + markdownText.substring(end);

        setMarkdownText(newText);
        setNewCursorLocation(start + 2 + selectedText.length);
    };


    // activated whenever a location cursor needs to be updated
    useEffect(() => {
        const textarea = textRef.current;
            if (!textarea) return;

        textarea.focus();
        textarea.setSelectionRange(newCursorLocation, newCursorLocation);
    }, [newCursorLocation])

    return (
        <Paper>
            <ButtonGroup fullWidth>
                <Button onClick={() => insert("bold")}>בולט</Button>
                {/* <Button onClick={() => insert("underline")}>קו תחתון</Button> */}
                <Button onClick={() => insert("italic")}>הטייה</Button>
                <Button onClick={() => insert("header1")}>כותרת 1</Button>
                <Button onClick={() => insert("header2")}>כותרת 2</Button>
                <Button onClick={() => insert("header3")}>כותרת 3</Button>
                <Button onClick={() => insert("image")}>הוספת תמונה</Button>
                <Button onClick={() => insert("link")}>הוספת קישור</Button>
                <Button>אימוגים</Button>
                <Button>סימוני טקסט</Button>
            </ButtonGroup>

            <TextField
                inputRef={textRef}
                multiline
                fullWidth
                value={markdownText}
                onChange={onTextChange}
            />
            <Card sx={{ bgcolor: "white", color: "black" }}>
                <MuiMarkdown>{markdownText}</MuiMarkdown>
            </Card>
        </Paper>
    );
};

export default MarkdownEditor;
