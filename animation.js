function HideAllTextAndArrow(){
    // $(".hide-text-for-gpt-animation").hide();
    // $('.modal-arrow').css({
    //     'display': 'none',
    // })
}
function handleMouseEnter() {
    ShowAllTextAndArrow();
  }
  
  // Функция, которая будет вызываться, когда курсор покидает элемент
  function handleMouseLeave() {
// HideAllTextAndArrow();
  }
  
  // Подписываемся на событие наведения курсора на элемент
  neuroKaminBorrow.addEventListener('mouseenter', handleMouseEnter);
  
  // Подписываемся на событие ухода курсора с элемента
  neuroKaminBorrow.addEventListener('mouseleave', handleMouseLeave);
function getAbsolutePosition(element) {
    var start = element.getBoundingClientRect();
    var xPosition = start.left;
    var yPosition = start.top;
    // var xPosition = end.left - startDefaultElement.x;
    // var yPosition = end.top - startDefaultElement.y;
    return { xPosition: xPosition, yPosition: yPosition };
  }
  var allPoints=[];
  function ShowAllTextAndArrow() {
var svgPath = '<svg width="145" height="115" viewBox="0 0 145 115" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_110_271)"><path d="M133.333 39.102C134.053 38.6925 134.305 37.7768 133.895 37.0566C133.486 36.3365 132.57 36.0847 131.85 36.4942L133.333 39.102ZM82.5916 27.7983L83.988 28.3459L82.5916 27.7983ZM63.0916 66.2982L62.4322 67.6455L63.0916 66.2982ZM33.0916 101.298L28.3047 84.6524L16.2824 97.121L33.0916 101.298ZM131.85 36.4942C125.866 39.8966 120.413 39.9748 115.421 38.459C110.353 36.9202 105.726 33.7272 101.514 30.4904C99.457 28.9097 97.4144 27.2516 95.5963 25.8992C93.7652 24.5373 91.9752 23.3396 90.285 22.6388C88.5879 21.9351 86.7584 21.6382 85.0292 22.4436C83.333 23.2335 82.1123 24.9117 81.1951 27.2506L83.988 28.3459C84.7847 26.3142 85.6151 25.4801 86.2958 25.1631C86.9434 24.8614 87.8163 24.8629 89.1359 25.41C90.4624 25.96 92.0032 26.9656 93.8058 28.3064C95.6214 29.6568 97.5152 31.201 99.686 32.8691C103.929 36.1301 108.923 39.6213 114.55 41.3296C120.252 43.0611 126.567 42.9496 133.333 39.102L131.85 36.4942ZM81.1951 27.2506C79.8796 30.6052 79.5824 33.4371 80.2793 35.7139C80.9972 38.0593 82.6925 39.5666 84.7883 40.3578C88.8206 41.8801 94.4894 40.8565 99.0862 38.5091C103.675 36.1661 107.864 32.1512 108.205 27.0548C108.555 21.843 104.846 16.4446 95.8137 11.4835L94.3694 14.1129C103.088 18.9017 105.441 23.4408 105.212 26.8541C104.976 30.3827 101.946 33.6803 97.7219 35.8373C93.5062 37.99 88.7688 38.6539 85.8479 37.5512C84.4671 37.0299 83.5491 36.1466 83.1479 34.8358C82.7257 33.4563 82.8035 31.3664 83.988 28.3459L81.1951 27.2506ZM95.8137 11.4835C86.5488 6.39425 78.1079 6.5213 71.1085 9.94557C64.1836 13.3334 58.8537 19.855 55.4879 27.246C52.1195 34.6427 50.641 43.0734 51.5693 50.4693C52.4973 57.8637 55.8768 64.4375 62.4322 67.6455L63.7509 64.9509C58.4049 62.3348 55.3963 56.8715 54.5459 50.0958C53.6957 43.3216 55.0487 35.449 58.2181 28.4893C61.3902 21.5238 66.3045 15.6356 72.4269 12.6404C78.4749 9.68152 85.8843 9.45208 94.3694 14.1129L95.8137 11.4835ZM62.4322 67.6455C65.5743 69.1831 68.4038 69.6054 70.8142 68.8918C73.2529 68.1698 74.9727 66.3721 76.044 64.0823C78.1429 59.5958 77.9542 52.8703 75.8958 46.4057C73.821 39.8897 69.7482 33.3099 63.6589 29.1318C57.5115 24.9138 49.4331 23.2341 39.6343 26.3696L40.5486 29.2269C49.4999 26.3625 56.6089 27.9328 61.9616 31.6055C67.3723 35.318 71.112 41.2694 73.0372 47.3159C74.9788 53.4137 74.9777 59.2819 73.3266 62.811C72.5229 64.529 71.3833 65.5946 69.9626 66.0152C68.5137 66.4441 66.4838 66.2882 63.7509 64.9509L62.4322 67.6455ZM39.6343 26.3696C22.907 31.7224 13.7245 42.5948 11.2129 55.1494C8.71634 67.6293 12.864 81.5028 22.2121 92.878L24.5299 90.9732C15.6355 80.1502 11.868 67.1682 14.1546 55.7379C16.4263 44.3824 24.7253 34.2903 40.5486 29.2269L39.6343 26.3696Z" fill="white"/></g><defs><filter id="filter0_d_110_271" x="0.499512" y="0.499878" width="143.592" height="113.798" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_271"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_271" result="shape"/></filter></defs></svg>';
paper.setup(document.getElementById('animationCanvas'));
var start = getAbsolutePosition(document.getElementById('hide-text-for-gpt-animation'));
// var end = getAbsolutePosition(document.getElementById('work-with-text'));

// Импортируем SVG и дожидаемся его загрузки
paper.project.importSVG(svgPath, {
    onLoad: function(item) {
        // Вызов функции для обхода всех детей группы и получения точек
        var points = extractPoints(item);
        points.forEach(function(point, index) {
            var point = new Point(start.xPosition + point._x, start.yPosition + point._y);
            console.log(point);
            allPoints.push(point);
        });
    }
});

// Функция для извлечения всех точек из элементов Path и CompoundPath
function extractPoints(item) {
    var points = [];
    // Проверяем, является ли элемент группой
    if (item instanceof paper.Group) {
        // Итерируемся по дочерним элементам группы
        item.children.forEach(function(child) {
            // Рекурсивно ищем точки
            points = points.concat(extractPoints(child));
        });
    }
    // Проверяем, является ли элемент составным путем
    else if (item instanceof paper.CompoundPath) {
        // Итерируемся по дочерним путям составного пути
        item.children.forEach(function(path) {
            path.segments.forEach(function(segment) {
                points.push(segment.point);
            });
        });
    }
    // Проверяем, является ли элемент обычным путем
    else if (item instanceof paper.Path) {
        // Итерируемся по сегментам пути
        item.segments.forEach(function(segment) {
            points.push(segment.point);
        });
    }
    return points;
}
    $(".hide-text-for-gpt-animation").show();
    var pointsSequence = [];

// Перебираем allPoints, кроме последней точки, так как для последней точки не с кем формировать пару
for (var i = 0; i < allPoints.length - 1; i++) {
    var startPoint = allPoints[i]; // текущая точка будет начальной точкой пары
    var endPoint = allPoints[i + 1]; // следующая точка будет конечной точкой пары
    
    pointsSequence.push([startPoint, endPoint]); // добавляем пару точек в pointsSequence
}
console.log(pointsSequence);
    var currentLine = 0; // Начинаем с первой линии
    var step = 0; // Начальный шаг интерполяции
    var lines = []; // Массив для хранения линий

    function onFrame(event) {
        if (currentLine < allPoints.length) {
            var from = allPoints[currentLine];
            var to = allPoints[currentLine+1];

            if (step === 0) { // Если только начали рисовать текущую линию
                var newPath = new Path({ strokeColor: 'white', strokeWidth: 4 ,strokeCap:'round' ,strokeJoin:'round'});
                newPath.add(from);
                lines.push(newPath);
            }

            // Интерполируем
            step += 0.2; // Настройка скорости анимации
            if (step <= 1) {
                var vector = to.subtract(from);
                var currentPoint = from.add(vector.multiply(step));
                lines[currentLine].add(currentPoint);
                lines[currentLine].smooth(); // Сглаживаем линию
                paper.view.draw(); // Обновляем вид
            } else {
                // Переходим к следующей линии
                currentLine++;
                step = 0; // Сбрасываем step для следующей линии
            }
        }
    }

    view.onFrame = onFrame;
}