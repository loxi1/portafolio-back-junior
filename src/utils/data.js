export const headerData = {
    links:
        [
            {
                text: 'Inicio',
                href: '/',
            },
            {
                text: 'Acerca de mi',
                href: '/acercademi',
            },
            {
                text: 'Proyectos',
                href: '/proyectos',
            },
            {
                text: 'Contáctanos',
                href: '/contactanos',
            },
        ]
};

export const footerMenu = {
    menusinferiores: [
        { title: 'Inicio', href: '/' },
        { title: 'Acerca de mi', href: '/acercademi' },
        { title: 'Proyectos', href: '/proyectos' },
        { title: 'Contáctanos', href: '/contactanos' },
    ]
}

export const portafolio = {
    proyectos: [
        { 
            title: 'GOerp', 
            description: 'ERP para gestionar los procesos de Gios restaurante.', 
            dia: '',
            anio: '2023',
            mes: 'Enero',
            git: 'https://github.com/mesquen/GOerp',
            tipo: "back",
            image: 'gios-restaurante.png', 
            "skills": [
                {
                    "name": "PHP",
                    "imagen": "php"
                },
                {
                    "name": "codeigniter",
                    "imagen": "codeigniter"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "Jquery",
                    "imagen": "jquery"

                },
                {
                    "name": "Boostrap",
                    "imagen": "boostrap"
                }
            ],
            url: 'https://goerp.pe/web' 
        },{ 
            title: 'Buenos amigos FC', 
            description: 'Sistema para gestionar las pichangas deportivas de barrio.', 
            dia: '',
            anio: '2022',
            mes: 'Abril',
            git: 'https://github.com/loxi1/sistema-buenos-amigos-fc',
            tipo: "back",
            image: 'sistema-buenos-amigos-fc.png', 
            "skills": [
                {
                    "name": "PHP",
                    "imagen": "php"
                },
                {
                    "name": "Laravel",
                    "imagen": "laravel"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "Jquery",
                    "imagen": "jquery"

                },
                {
                    "name": "Boostrap",
                    "imagen": "boostrap"
                }
            ],
            url: '' 
        },
        { 
            title: 'Accesibilidad de establecimiento', 
            description: 'Averiguar si un lugar es ascequible para discapacitados, se hace consultas al api de google y se registra valoración y comentario en caso este logueado el usuario.', 
            dia: '',
            anio: '2023',
            mes: 'Julio',
            git: 'https://github.com/lemcok/equipo4-ed4-backend',
            tipo: "back",
            image: 'accesibilidad-de-lugar.png', 
            "skills": [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Prisma.io",
                    "imagen": "prisma"
                },
                {
                    "name": "Postgresql",
                    "imagen": "postgresql"
                },
                {
                    "name": "Fastify",
                    "imagen": "fastify"
                },
                {
                    "name": "JWT",
                    "imagen": "jwt"

                },
                {
                    "name": "Fastify",
                    "imagen": "fastify"
                },
                {
                    "name": "Docker",
                    "imagen": "docker"
                }
            ],
            url: '' 
        },
        {
            title: 'Practica Node (Login)',
            description: 'CURD de usuario, rol y categoria, usando prisma, exprees y login',
            dia: '',
            anio: '2023',
            mes: 'Agosto',
            git: 'https://github.com/loxi1/jlc-inventario',
            image: 'jlc-inventario.png',
            tipo: "back",
            "skills" : [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Express",
                    "imagen": "express"

                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "MySQL",
                    "imagen": "mysql"

                },
                {
                    "name": "JWT",
                    "imagen": "jwt"

                }
            ]
        }      
    ]
}

export const skills = {
    habilidades: [
        "php", "laravel", "codeigniter", "nodejs","prisma", "fastify", "express", "mysql"
    ]
}
