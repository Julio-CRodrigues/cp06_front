import React from 'react';

const ErrorContent: React.FC = () => {
    return (
        <div
        className="flex items-center justify-center min-h-screen bg-blue-500"
        style={{
            backgroundImage: `url('/img/imagem_erro.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            minHeight: '100vh', 
        }}
    >
        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-4 rounded">Esta página não foi encontrada</h1>
    </div>
);
};

export default ErrorContent;