<script lang="ts"></script>

<div class="flex justify-center items-center p-4">
    <div class="bg-amber-50 p-5 flex flex-col gap-1 items-center justify-center rounded-2xl">
        <h1 class="text-xl font-bold">Contato</h1>
        <ul class="flex flex-col gap-3">
            <li>Email: <a href="mailto:contato@cafechocolate.com.br"><address>contato@cafechocolate.com.br</address></a></li>
            <li>Telefone: <a href="tel:61988885566"><address>(61) 98888-5566</address></a></li>
            <li>Endereço: <address>Algum lugar em Brasilia, acha por ai</address></li>
        </ul>
    </div>
</div>

<div class="flex justify-center items-center p-4">
    <div class="bg-amber-50 p-5 flex flex-col gap-1 items-center justify-center rounded-2xl">
        <h1 class="text-xl font-bold">Fale com a gente</h1>
        <form action="" class="flex flex-col">
            <label>
                <p>Nome</p>
                <input type="text" name="name" class="bg-white rounded border [:user-invalid]:border-red-600">
            </label>
            <label>
                <p>Telefone</p>
                <input type="text" name="tel" class="bg-white rounded border [:user-invalid]:border-red-600">
            </label>
            <fieldset>
                <legend>Selecione um tipo de mensagem</legend>
                <label for="suggestion">
                    <input type="radio" name="type" value="suggestion" checked>
                    Sugestão
                </label>
                <label for="complaint">
                    <input type="radio" name="type" value="complaint">
                    Reclamação
                </label>
                <label for="praise">
                    <input type="radio" name="type" value="praise">
                    Elogio
                </label>
            </fieldset>
            <label>
                <p>Mensagem</p>
                <textarea name="message" class="bg-white rounded border [:user-invalid]:border-red-600 resize-none"></textarea>
            </label>
            <button type="submit" class="">Mandar</button>
        </form>
    </div>
</div>
