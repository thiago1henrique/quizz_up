import '../App.css';
import '../pages/Quiz';


function Menu() {

  return (
    <>
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


<div
    className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
    onClick={() => window.location.href = "/Quiz"}>
   
            
        <img className='p-5 rounded-full shadow-orange-300' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="" width={120} />

    
    <p className="text-xl font-medium text-slate-700 mt-3</svg>">JavaScript</p>
    <p className="mt-2 text-sm text-slate-500">Teste seus conhecimentos em JavaScript com perguntas de múltipla escolha.</p>
        
</div>

<div
    className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer" onClick={() => window.location.href = "/Quiz"}
 >
        
        <img className='p-2 rounded-full shadow-orange-300' src="https://cdn.pixabay.com/photo/2020/03/17/17/36/database-4941301_1280.png" alt="" width={100} />
    <p className="text-xl font-medium text-slate-700 mt-3">Banco de Dados
        </p>
    <p className="mt-2 text-sm text-slate-500">Testes seus conhecimentos em plataformas de Banco de dados .</p>
</div>

<div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer" onClick={() => window.location.href = "/Quiz"}
    >
        <img className='p-2 shadow-orange-300' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" alt="" width={160} />
    <p className="text-xl font-medium text-slate-700 mt-3">Node JS </p>
    <p className="mt-2 text-sm text-slate-500">Teste seus conhecimentos em Node e desenvolva suas capacidades.
        .</p>
</div>


<div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer"     onClick={() => window.location.href = "/Quiz"}
    >
    <img className='p-2 shadow-orange-300' src="https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png" alt="" width={100} />
    <p className="text-xl font-medium text-slate-700 mt-3">Python
        </p>
    <p className="mt-2 text-sm text-slate-500">Questionário para testar seus conhecimentos em python e estruturas de dados !</p>
</div>

<div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer"     onClick={() => window.location.href = "/Quiz"}
    >
    <img className=' shadow-orange-300' src="https://static.vecteezy.com/system/resources/previews/048/332/150/non_2x/java-programming-language-java-logo-free-png.png" alt="" width={100} />
    <p className="text-xl font-medium text-slate-700 mt-3">Java
        </p>
    <p className="mt-2 text-sm text-slate-500">Teste seus conhecimentos em Java, POO e seus componentes com perguntas de múltipla escolha.
        .</p>
</div>

<div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer "    onClick={() => window.location.href = "/Quiz"}>
    <img src="https://static.vecteezy.com/system/resources/previews/056/850/739/non_2x/github-black-logo-on-a-transparent-background-free-png.png" alt="" width={100} />
    <p className="text-xl font-medium text-slate-700 mt-3">Github
        </p>
    <p className="mt-2 text-sm text-slate-500">Reforce seus conhecimentos em GitHub e suas funcionalidades com perguntas de múltipla escolha.
    </p>

        </div>

    


        </div>
    </>
  )
}
export default Menu;
