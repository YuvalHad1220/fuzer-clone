import React, { useState, useRef, useEffect } from "react";
import { ButtonGroup, Button, Paper, TextField, Card } from "@mui/material";
import MuiMarkdown from "mui-markdown";

// need to return new cursor location too
const markdownWithType = (type: string, text: string) => {
    switch (type) {
        case "bold":
            const boldText = `**${text}**`;
            const boldCursorPosition = 2 + text.length;
            return { newText: boldText, newCursorPosition: boldCursorPosition };
        case "italic":
            const italicText = `*${text}*`;
            const italicCursorPosition = 1 + text.length;
            return { newText: italicText, newCursorPosition: italicCursorPosition };
        case "link":
            const linkText = `[${text.length > 0 ? text : "הכנס תיאור קישור"}](הכנס כתובת קישור)`;
            const linkCursorPosition = linkText.length;
            return { newText: linkText, newCursorPosition: linkCursorPosition };
        case "image":
            const imageText = `${text}[](הכנס כתובת תמונה)`;
            const imageCursorPosition = imageText.length;
            return { newText: imageText, newCursorPosition: imageCursorPosition };
        case "header1":
            const header1Text = `#### ${text}`;
            const header1CursorPosition = 5 + text.length;
            return { newText: header1Text, newCursorPosition: header1CursorPosition };
        case "header2":
            const header2Text = `##### ${text}`;
            const header2CursorPosition = 6 + text.length;
            return { newText: header2Text, newCursorPosition: header2CursorPosition };
        case "header3":
            const header3Text = `###### ${text}`;
            const header3CursorPosition = 7 + text.length;
            return { newText: header3Text, newCursorPosition: header3CursorPosition };
           
        default:
            return { newText: text, newCursorPosition: text.length };
    }
};


const MarkdownEditor: React.FC = () => {

    const textRef = useRef<HTMLTextAreaElement>();
    const [markdownText, setMarkdownText] = useState<string>("");
    const [newCursorLocation, setNewCursorLocation] = useState<number>(0);

    // IDEA: replace less than 4 # with 4 #
    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarkdownText(e.target.value);
    };

    const insert = (type: string) => {
        const textarea = textRef.current;
            if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = markdownText.substring(start, end);

        const {newText, newCursorPosition} = markdownWithType(type, selectedText);
        const finalText = markdownText.substring(0, start) + newText + markdownText.substring(end);

        setMarkdownText(finalText);
        setNewCursorLocation(start + newCursorPosition);
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
            <ButtonGroup fullWidth sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
            <Button onClick={() => insert("header1")} sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>כותרת 1</Button>
                <Button onClick={() => insert("header2")}>כותרת 2</Button>
                <Button onClick={() => insert("header3")}>כותרת 3</Button>
                <Button onClick={() => insert("bold")}>בולט</Button>
                <Button onClick={() => insert("italic")}>הטייה</Button>
                <Button onClick={() => insert("image")}>הוספת תמונה</Button>
                <Button onClick={() => insert("link")}>הוספת קישור</Button>
                <Button>אימוגים</Button>
                <Button sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>סימוני טקסט</Button>
            </ButtonGroup>

            <TextField
                inputRef={textRef}
                multiline
                fullWidth
                value={markdownText}
                onChange={onTextChange}
                InputProps = {{sx: {borderTopLeftRadius: 0, borderTopRightRadius: 0, bgcolor: "white", color: "black"}}}
            />
            <Card>
                <MuiMarkdown>{markdownText}</MuiMarkdown>
            </Card>
        </Paper>
    );
};

export default MarkdownEditor;
