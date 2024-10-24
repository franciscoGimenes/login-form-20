


const supabaseUrl = 'https://pfdjgsjbmhisqjxbzmjn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZGpnc2pibWhpc3FqeGJ6bWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNjY3NzEsImV4cCI6MjA0NDc0Mjc3MX0.qYuDBWNU8F6qzcAaksDeXc_CITjHAMAagFgFq-miLfE';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);


document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();



    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Email:', email);
    console.log('Password:', password);

    // Faz o login com email e senha no Supabase
    const { user, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login: ' + error.message);
        return;
    }

    console.log('Usuário retornado:', user); // Verifique o usuário retornado

    // Se o login foi bem-sucedido, buscar o perfil associado
    // const { data: profile, error: profileError } = await supabaseClient
    //     .from('profiles')
    //     .select('*')
    //     .eq('id', user.id)
    //     .single();

    // if (profileError || !profile) {
    //     alert('Erro ao carregar o perfil do usuário');
    //     return;
    // }

    // // Verifica se o usuário é coordenador ou professor
    // if (profile.tipo_usuario === 'coordenador') {
    //     alert('Login como coordenador bem-sucedido!');
    //     // Redireciona para a página do coordenador
    //     window.location.href = 'paginaCordenador.html';
    // } else if (profile.tipo_usuario === 'professor') {
    //     alert('Login como professor bem-sucedido!');
    //     // Redireciona para a página do professor
    //     window.location.href = 'paginaProfessor.html';
    // } else {
    //     alert('Tipo de usuário não reconhecido!');
    // }
});
