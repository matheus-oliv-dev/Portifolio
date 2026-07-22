#!/usr/bin/env bash

# Script de validação do projeto Vanilla
# Por ser um projeto sem dependências e build, o init verifica apenas 
# a sanidade da estrutura base do projeto.
# Um agente deve rodar este script antes e depois de modificar algo.

echo "Verificando integridade do projeto Portfólio..."

# Função para verificar se arquivo existe e não está vazio
check_file() {
    if [ ! -s "$1" ]; then
        echo "ERRO: O arquivo fundamental $1 não existe ou está vazio."
        exit 1
    fi
}

# Função para verificar se diretório existe
check_dir() {
    if [ ! -d "$1" ]; then
        echo "ERRO: O diretório fundamental $1 foi deletado."
        exit 1
    fi
}

check_file "index.html"
check_file "README.md"
check_dir "css"
check_dir "js"
check_dir "assets"

echo "Tudo OK! Estrutura do projeto está intacta."
exit 0
