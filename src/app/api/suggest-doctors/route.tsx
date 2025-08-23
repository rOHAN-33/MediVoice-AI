import { NextResponse } from "next/server";
import { openai } from "../../../../config/OpenAiModel";
import { AIDoctorAgents } from "../../../../shared/list";

export async function POST(req:NextResponse) {
    const {notes} = await req.json()
    try {
        const completion = await openai.chat.completions.create({
    model: 'google/gemini-2.5-flash-lite-preview-06-17',
    messages: [
        {role:"system",content:JSON.stringify(AIDoctorAgents)},
      {
        role: 'user',
        content: 'User Notes/Symtoms:"'+notes+'"\n\nSuggest 5 doctors with name, speciality, experience, and clinic address in a json array format',
      },
    ],
  });
  const rawResp = completion.choices[0].message;
  return NextResponse.json(rawResp)

    } catch (error) {
        return NextResponse.json(error)
    }
}