const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

const encripta = async (senha) => {
    if (!senha) return null;
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(senha, salt);
        return hash;
    } catch (error) {
        console.error('Erro ao criar hash:', error);
        throw new Error('Erro ao criar hash');
    }
}

async function main() {
    await prisma.roupa.createMany({
        data: [{
            "nome": "Luis",
            "telefone": "(19)99999-9999",
            "email": "luis@gmail.com",
            "senha": encripta("senha123")
        }],
    })

    await prisma.roupa.createMany({
        data: [
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "body",
                "imagemUrl": "https://i.pinimg.com/736x/bb/b5/3c/bbb53c4947a994284cef58b68b6d7e56.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "camisa preta manga longa simples",
                "imagemUrl": "https://i.pinimg.com/1200x/4b/a7/46/4ba746001f90d59e63cd41a614e2e114.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "camiseta preta simples manga curta",
                "imagemUrl": "https://i.pinimg.com/736x/23/b6/e4/23b6e4907db2c6435dfc20df98394df5.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "cropped preto simples manga longa",
                "imagemUrl": "https://i.pinimg.com/1200x/8f/00/f5/8f00f5705959e51026a1786e0257b269.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "cropped preto simples manga curta",
                "imagemUrl": "https://i.pinimg.com/736x/4d/c5/9e/4dc59e1833d1032a536e5a96aa9ba3d6.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "cropped manga bufante",
                "imagemUrl": "https://i.pinimg.com/736x/91/ee/20/91ee2050ec2f7289aed3e9c584502d74.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "baby look gola canos ",
                "imagemUrl": "https://i.pinimg.com/1200x/28/d6/d0/28d6d07924a5e127d126d9e04bc0b3f3.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "blusa simples com gola ",
                "imagemUrl": "https://i.pinimg.com/1200x/9b/a4/9c/9ba49c7cf2337fb63f5e5b14b9871a23.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "regata ribana canelada ",
                "imagemUrl": "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F4763169%2F5118-N10EN-C1.jpg%3Fv%3D638962358515830000&w=1280&q=100"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "blusa um ombro só ",
                "imagemUrl": "https://i.pinimg.com/736x/f9/f9/b1/f9f9b15e255f670ca3ab9f1e0f48dcaa.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "body regata ribana canelada ",
                "imagemUrl": "https://i.pinimg.com/736x/36/24/e5/3624e5acff74267ca540d050ce6fb488.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "cropped tomara que caia simples",
                "imagemUrl": "https://i.pinimg.com/1200x/e7/ee/31/e7ee31add3b8bb925472a8134dbe7e67.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "regata hering",
                "imagemUrl": "https://i.pinimg.com/1200x/2a/fc/cc/2afccc9352851877371d96b08ea01c82.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "blusa ombro a ombro",
                "imagemUrl": "https://i.pinimg.com/736x/c7/0e/8d/c70e8db46b0682eed4481b72051fc9c3.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "regata gola quadrada",
                "imagemUrl": "https://i.pinimg.com/736x/80/b4/32/80b432f8faf6a4b08f69befe321e15ec.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "tomara q caia com amarração fina/pescoço",
                "imagemUrl": "https://i.pinimg.com/1200x/a6/31/67/a63167e02fbbeca6b448f6b1e9bf223e.jpg"
            },
            {
                "nome": "feminino",
                "descricao": "casual",
                "tipo": "regata amarração fina/pescoço",
                "imagemUrl": "https://i.pinimg.com/1200x/9c/5c/1d/9c5c1d7d1e20710e6fe189b2f67b3d96.jpg"
            }
        ],
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })