
function cirilica(text) {
    var slovaa = [['A', 'A'], ['B', 'Б'], ['C', 'Ц'], ['Č', 'Ч'], ['Ć', 'Ћ'], ['D', 'Д'], ['Dž', 'Џ'], ['Đ', 'Ђ'], ['E', 'Е'], ['F', 'Ф'], ['G', 'Г'], ['H', 'Х'], ['I', 'И'], ['J', 'Ј'], ['K', 'К'], ['L', 'Л'], ['Lj', 'Љ'], ['M', 'М'], ['N', 'Н'], ['Nj', 'Њ'], ['O', 'O'], ['P', 'П'], ['R', 'Р'], ['S', 'С'], ['Š', 'Ш'], ['T', 'Т'], ['U', 'У'], ['V', 'В'], ['Z', 'З'], ['Ž', 'Ж'],
    ['a', 'a'], ['b', 'б'], ['c', 'ц'], ['č', 'ч'], ['ć', 'ћ'], ['d', 'д'], ['dž', 'џ'], ['đ', 'ђ'], ['e', 'е'], ['f', 'ф'], ['g', 'г'], ['h', 'х'], ['i', 'и'], ['j', 'j'], ['k', 'k'], ['l', 'л'], ['lj', 'љ'], ['m', 'м'], ['n', 'н'], ['nj', 'њ'], ['o', 'o'], ['p', 'п'], ['r', 'р'], ['s', 'с'], ['š', 'ш'], ['t', 'т'], ['u', 'у'], ['v', 'в'], ['z', 'з'], ['ž', 'ж'], [' ', ' '], [',', ','], ['.', '.'], ['!', '!'], ['?', '?']];
    var provera = 'latinica';
    var cirilica = ['Б', 'Ч', 'Ц', 'Ч', 'Ћ', 'Д', 'Џ', 'Ђ', 'Ф', 'Г', 'Х', 'И', 'Л', 'Љ', 'Н', 'Њ', 'П', 'Ш', 'З', 'Ж',
        'ц', 'ч', 'ћ', 'д', 'џ', 'ђ', 'ф', 'г', 'х', 'и', 'л', 'љ', 'м', 'н', 'њ', 'п', 'ш', 'т', 'в', 'ж', 'б'];
    for (var t in text) {
        for (var c in cirilica) {
            if (text.charAt(t) == cirilica[c]) {
                provera = 'cirilica';
            }
        }
    }

    if (provera === 'latinica') {
        var newText = '';
        for (var i = 0; i < text.length; i++) {
            var slovo = text.charAt(i);
            var sledeceSlovo = text.charAt(i + 1);
            var karakteri = false;
            if (slovo === 'd' && sledeceSlovo === 'ž') {
                newText += 'џ';
                i++;
                karakteri = true;
            }
            if (slovo === 'D' && sledeceSlovo === 'ž') {
                newText += 'Џ';
                i++;
                karakteri = true;
            }
            if (slovo === 'L' && sledeceSlovo === 'j') {
                newText += 'Љ';
                i++;
                karakteri = true;
            }
            if (slovo === 'l' && sledeceSlovo === 'j') {
                newText += 'љ';
                i++;
                karakteri = true;
            }
            if (slovo === 'N' && sledeceSlovo === 'j') {
                newText += 'Њ';
                i++;
                karakteri = true;
            }
            if (slovo === 'n' && sledeceSlovo === 'j') {
                newText += 'њ';
                i++;
                karakteri = true;
            }
            if (!karakteri) {
                for (var j = 0; j < slovaa.length; j++) {
                    if (text.charAt(i) == slovaa[j][0]) {
                        newText += slovaa[j][1];
                    }
                }
            }

        }
        return newText;
    }

    if (provera === 'cirilica') {
        var newCirilica = '';
        for (var d in text) {
            for (var b in slovaa) {
                if (text.charAt(d) == slovaa[b][1]) {
                    newCirilica += slovaa[b][0];
                }
            }
        }
        return newCirilica;
    }

}
document.getElementById('input').addEventListener('blur', function () {
    document.getElementById('rotate').classList.remove('rotacija');
    document.getElementById('rotate').classList.remove('bold');
    document.getElementById('rotate').classList.remove('italic');
    document.getElementById('rotate').style.fontSize = '';
    document.getElementById('rotate').style.color = '';
});
document.getElementById('input').addEventListener('focus', function () {
    document.getElementById('forma-2').style.display = 'none';
    document.getElementById('forma-2').reset();
})
document.getElementById('btn').addEventListener('click', function () {
    var input = document.getElementById('input').value;
    var output = document.getElementById('rotate');
    var klasa = output.classList;
    if (input.length == 0) {
        output.textContent = 'Input mora biti popunjen!';
        klasa.remove('rotacija');
        klasa.remove('bold');
        klasa.remove('italic');
        output.style.fontSize = '';
        output.style.color = '';
        document.getElementById('forma-2').style.display = 'none';
    } else {
        klasa.add('rotacija');
        output.textContent = cirilica(input);
        document.getElementById('forma').reset();
        document.getElementById('forma-2').style.display = 'block';
    }

})
document.getElementById('check-bold').addEventListener('change', function () {
    var textOutput = document.getElementById('rotate');
    textOutput.classList.add('bold');
    if (this.checked === false) {
        textOutput.classList.remove('bold');
    }
});
document.getElementById('check-italic').addEventListener('change', function () {
    var textOutput = document.getElementById('rotate');
    textOutput.classList.add('italic');
    if (this.checked === false) {
        textOutput.classList.remove('italic');
    }
})
document.getElementById('select').addEventListener('change', function () {
    for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].selected) {
            document.getElementById('rotate').style.fontSize = this.options[i].value + 'px';
        }
    }
})
document.getElementById('select-color').addEventListener('change', function () {
    for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].selected) {
            document.getElementById('rotate').style.color = this.options[i].value;
            if (this.options[i].value === 'random') {
                document.getElementById('rotate').style.color = '#' + Math.random().toString(16).substr(2, 3);
            };
        }
    }
})