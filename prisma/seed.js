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
	await prisma.usuario.createMany({
		data: [{
			"nome": "Luis",
			"telefone": "(19)99999-9999",
			"email": "luis@gmail.com",
			"senha": await encripta("senha123")
		},
		{
			"nome": "Bia",
			"telefone": "(19)99999-0000",
			"email": "bia@gmail.com",
			"senha": await encripta("senha123")
		},
		{
			"nome": "Katy",
			"telefone": "(19)99999-0000",
			"email": "katy@gmail.com",
			"senha": await encripta("senha123")
		}],
	})

	await prisma.roupa.createMany({
		data:
			[
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
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "blusa um ombro só com manga",
					"imagemUrl": "https://i.pinimg.com/736x/f4/8b/58/f48b58ef16a4aa29e833ee86512608a0.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "regata simples fina",
					"imagemUrl": "https://i.pinimg.com/1200x/6f/c3/e0/6fc3e0eb661b161b63027cf2c05db53d.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camiseta  com uma manga caida",
					"imagemUrl": "https://i.pinimg.com/1200x/00/29/0c/00290c8727ad26bbc43579e7ff865ed9.jpg"
				},

				{
					"nome": "feminino",
					"descricao": "casual",
					"tipo": "regata trançada frente",
					"imagemUrl": "https://i.pinimg.com/736x/8f/6f/e9/8f6fe96808068595d09df6ea649c1e03.jpg"
				},

				{
					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camisetão b/ com desenho",
					"imagemUrl": "hhttps://i.pinimg.com/736x/dc/51/c7/dc51c7e5648988ae47ca1dc2c392c613.jpg"
				},


				{


					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camisetão p/ com desenho",
					"imagemUrl": "https://i.pinimg.com/736x/47/43/44/474344f08b3d139a527ef16839e25778.jpg"
				},


				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camisetão com manga gola alta",
					"imagemUrl": "https://i.pinimg.com/736x/2b/32/8a/2b328aca59cb28945312ddade9416a53.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camisetão musgo",
					"imagemUrl": "https://i.pinimg.com/736x/56/01/9a/56019a3b1b910b393bf32935f159c438.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camiseta simples",
					"imagemUrl": "https://i.pinimg.com/736x/42/fb/6d/42fb6dd0750a0bb9501a8d2b4ab6c071.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "camisa preta planetária",
					"imagemUrl": "https://i.pinimg.com/1200x/62/1a/fa/621afa8464a4b795c58c4880f32680fa.jpg "
				},

				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "short de couro",
					"imagemUrl": "https://i.pinimg.com/1200x/62/1a/fa/621afa8464a4b795c58c4880f32680fa.jpg "
				},

				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "bermuda jens f/ larga",
					"imagemUrl": "https://i.pinimg.com/1200x/ef/01/90/ef0190130ff82d983a67e18c1363c6f7.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "short de veludo",
					"imagemUrl": "https://i.pinimg.com/736x/73/3b/b4/733bb44e2542df75bc74d1a724a9a434.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "short jens curto",
					"imagemUrl": "https://i.pinimg.com/1200x/2e/70/67/2e7067606e2aca15e7b4862e6b0aa693.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "short jens bermuda curta",
					"imagemUrl": "https://i.pinimg.com/736x/c0/b8/bc/c0b8bc8d8b11643a54592e61ee53dd9c.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "short moleton marrom",
					"imagemUrl": "https://i.pinimg.com/1200x/5b/07/ed/5b07ed4029cf0239b7f2a1b719cd1c16.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "mini short ",
					"imagemUrl": "https://i.pinimg.com/1200x/f3/a4/16/f3a41671fe4f4540fdd54218b837ea73.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "short couro marrom ",
					"imagemUrl": "https://i.pinimg.com/736x/0e/e0/ad/0ee0ad875158340e089d66458b86ac00.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens azul ",
					"imagemUrl": "https://i.pinimg.com/1200x/88/da/24/88da241ef4f6684246a9f6a62c06dbe5.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens escuro ",
					"imagemUrl": "https://i.pinimg.com/1200x/ef/66/3c/ef663cb9911b1c988a3adbd099ab4eb2.jpg "
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens cinza ",
					"imagemUrl": "https://i.pinimg.com/1200x/bd/4d/04/bd4d04f3e485ff76ac268150f3967f58.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens clara/rasgada/larga ",
					"imagemUrl": "https://i.pinimg.com/1200x/dd/ae/44/ddae44bf38210b4ccfe53e29617e719a.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens clara/skinny/boca de sino ",
					"imagemUrl": "https://i.pinimg.com/736x/af/c8/04/afc8040c9b712ee8f3e0dccf08798abe.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens escura/larga",
					"imagemUrl": "https://i.pinimg.com/736x/ae/ed/3f/aeed3f9bbb4445ec0c706e8599d6f346.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens clara/skinny/cintura baixa",
					"imagemUrl": "https://i.pinimg.com/736x/2f/57/f7/2f57f72c47f35aeda094164b474e60ad.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "calça jens cargo/preta",
					"imagemUrl": "https://i.pinimg.com/1200x/91/09/7c/91097c6627fb82e7f507d31d65db08f1.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia simples preta",
					"imagemUrl": "https://i.pinimg.com/1200x/ef/fd/24/effd24fb7dfeea5d5f436b4b60399ebe.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia jens preta",
					"imagemUrl": "https://i.pinimg.com/736x/f5/16/5e/f5165e34a45780a80deb3dddf844db28.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia de couro",
					"imagemUrl": "https://i.pinimg.com/1200x/1b/f3/b9/1bf3b933c66c9a9e2cfbabc9bf295ca2.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia de couro aberta na perna",
					"imagemUrl": "https://i.pinimg.com/1200x/5c/bd/e1/5cbde17588df6ff5ba8a8b75f8aa5193.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia cargo",
					"imagemUrl": "https://i.pinimg.com/736x/12/fc/a4/12fca4f1bba5ed2704dd7132b851acb2.jpg"
				},
				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia camadas comprida",
					"imagemUrl": "https://i.pinimg.com/736x/2c/c1/aa/2cc1aa9280263ca9050c2eed00f1f856.jpg"
				},

				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia jens comprida aberta frente",
					"imagemUrl": "https://i.pinimg.com/1200x/af/68/ca/af68ca26f214bb6179fff6a5a2b9a286.jpg"
				},

				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia jens curta",
					"imagemUrl": "https://i.pinimg.com/736x/71/d3/4a/71d34a8a85cec117a88704d3430ed999.jpg"
				},

				{

					"nome": "feminino",
					"descricao": "casual",
					"tipo": "saia colada preta comprida",
					"imagemUrl": "https://i.pinimg.com/736x/71/d3/4a/71d34a8a85cec117a88704d3430ed999.jpg"
				}
			],
	})

	await prisma.escolha.createMany({
		data: [
			{ "usuarioId": 2 },
			{ "usuarioId": 3 }
		],
	})

	await prisma.escolhido.createMany({
		data: [
			{ "escolhaId": 1, "roupaId": 1 },
			{ "escolhaId": 1, "roupaId": 3 },
			{ "escolhaId": 1, "roupaId": 5 },
			{ "escolhaId": 1, "roupaId": 8 },
			{ "escolhaId": 2, "roupaId": 1 },
			{ "escolhaId": 2, "roupaId": 10 }
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