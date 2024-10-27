export type TipoAvaliacao = {
    nome: string;         // Nome da avaliação
    nota: number;        // Nota da avaliação
    feedback?: string;   // Feedback opcional
    link?: string;       // Link opcional
};

export interface InterfaceAvaliacao {
    nome: string;        // Nome da avaliação
    nota: number;       // Nota da avaliação
    feedback?: string;  // Feedback opcional
    link?: string;      // Link opcional
}
