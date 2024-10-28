import { Databases, ID, Query } from "appwrite";
import client from "../../../../lib/appwrite_alunos";
import { NextResponse } from "next/server";
import { TipoAvaliacao } from "../../../../types/types"; // Certifique-se de que este caminho está correto

// Criar um objeto DATABASE passando o arquivo de configuração da plataforma.
const database = new Databases(client);

// Função para buscar todas as avaliações do aluno Gustavo
export async function getAllAvaliacoesGustavo() {
    try {
        const response = await database.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_GUSTAVO_ID as string, // Usando a coleção específica do Gustavo
            [Query.orderAsc("$createdAt")]
        );
        
        return response;
    } catch (error) {
        console.error("Erro na listagem das avaliações!", error);
        throw new Error("Falha na listagem de dados!");
    }    
}

// Manipulador de requisição GET para obter as avaliações do Gustavo
export async function GET() {
    try {
        const avaliacoes = await getAllAvaliacoesGustavo();
        return NextResponse.json(avaliacoes);
    } catch (error) {
        return NextResponse.json({ error: "Falha na obtenção das informações. " + error }, { status: 500 });
    }
}

// Função para criar uma nova avaliação para o aluno Gustavo
export async function createAvaliacao(avaliacao: TipoAvaliacao) {
    try {
        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_GUSTAVO_ID as string, // Usando a coleção específica do Gustavo
            ID.unique(),
            avaliacao
        );

        return response;
    } catch (error) {
        console.error("Erro ao criar avaliação!", error);
        throw new Error("Falha ao criar avaliação!");
    }
}

// Manipulador de requisição POST para adicionar uma nova avaliação para o aluno Gustavo
export async function POST(request: Request) {
    try {
        const { nome, nota, feedback, link } = await request.json(); // Esperando os dados da avaliação

        // Validação da nota entre 0 e 100
        if (nota < 0 || nota > 100) {
            return NextResponse.json({ error: "A nota deve estar entre 0 e 100." }, { status: 400 });
        }

        const avaliacao = { nome, nota, feedback, link } as TipoAvaliacao; // Cria o objeto da avaliação
        const response = await createAvaliacao(avaliacao);

        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Falha na criação da avaliação: " + error }, { status: 500 });
    }
}
