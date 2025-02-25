import { Databases, ID, Query } from "appwrite";
import client from "../../../../../lib/appwrite_alunos";
import { NextResponse } from "next/server";
import { TipoAvaliacao } from "../../../../../types/types";

const database = new Databases(client);

export async function getAllAvaliacoesAdriano() {
    try {
        const response = await database.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ADRIANO_ID as string,
            [Query.orderAsc("$createdAt")]
        );
        
        return response;
    } catch (error) {
        console.error("Erro na listagem das avaliações!", error);
        throw new Error("Falha na listagem de dados!");
    }    
}

export async function GET() {
    try {
        const avaliacoes = await getAllAvaliacoesAdriano();
        return NextResponse.json(avaliacoes);
    } catch (error) {
        return NextResponse.json({ error: "Falha na obtenção das informações. " + error }, { status: 500 });
    }
}

export async function createAvaliacao(avaliacao: TipoAvaliacao) {
    try {
        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ADRIANO_ID as string,
            ID.unique(),
            avaliacao
        );

        return response;
    } catch (error) {
        console.error("Erro ao criar avaliação!", error);
        throw new Error("Falha ao criar avaliação!");
    }
}

export async function POST(request: Request) {
    try {
        const { nome, nota, feedback, link } = await request.json();
        if (typeof nota !== 'number' || nota < 0 || nota > 100) {
            return NextResponse.json({ error: "A nota deve ser um número entre 0 e 100." }, { status: 400 });
        }

        const avaliacao = { nome, nota, feedback, link } as TipoAvaliacao;
        const response = await createAvaliacao(avaliacao);

        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Falha na criação da avaliação: " + error }, { status: 500 });
    }
}
