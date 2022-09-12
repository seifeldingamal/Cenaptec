import { Request, Response, NextFunction } from "express";
import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import db from "../db";

interface Text {
  textID?: string | null;
  text: string;
}

const getText = async (req: Request, res: Response, next: NextFunction) => {
  const textCol = collection(db, "texts");
  const textSnapshot = await getDocs(textCol);
  const textList = textSnapshot.docs.map((doc) => doc.data())[0];
  return res.status(200).json({
    textList,
  });
};

const addText = async (req: Request, res: Response, next: NextFunction) => {
  let text: string = req.body;

  await setDoc(doc(db, "texts", "Hello"), {
    text: text,
  });

  return res.status(200).send("Text Saved!");
};

export default { getText, addText };
