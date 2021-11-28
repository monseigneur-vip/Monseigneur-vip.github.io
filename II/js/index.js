TweenMax.lagSmoothing(0);
console.clear();
var Flame = /** @class */ (function () {
    function Flame(svg, start, end, width, particle) {
        this.id = String(Math.round(Math.random() * 999999999999999));
        this.group = svg.group();
        this.group.addClass('flame');
        this.startPoint = start;
        this.endPoint = end;
        this.startThickness = width + Math.round(Math.random() * 50);
        this.endThickness = 10 + Math.round(Math.random() * 10);
        this.guidePosition = Math.random() * 100;
        this.frequency = 0.01 + Math.random() * 0.008;
        this.amplitude = 40 + Math.random() * 40;
        this.height = 500;
        this.endHeight = 100 + Math.round(Math.random() * 400);
        this.y = Math.random() * 100;
        this.particle = particle;
        var colors = ['#F9ECA9', '#EFC900', '#D79700', '#D0BB48'];
        this.body = this.group.path().attr({
            fill: this.particle ? '#F9ECA9' : colors[Math.floor(Math.random() * colors.length)],
            opacity: this.particle ? 1 : 0.8,
            stroke: 'none'
        });
        this.updateGuide();
    }
    Flame.prototype.remove = function () {
        this.group.remove();
    };
    Flame.prototype.updateGuide = function () {
        this.guide = [];
        var height = this.startPoint.y - this.endPoint.y;
        var widthChange = this.startPoint.x - this.endPoint.x;
        var y = this.startPoint.y;
        while (y-- >= this.endPoint.y) {
            var x = this.startPoint.x + (widthChange - (widthChange / height) * y);
            var wave = Math.sin(y * this.frequency + this.guidePosition);
            this.guide.push({ y: y, x: x + (wave * this.amplitude / 2 + this.amplitude / 2) });
        }
    };
    Flame.prototype.start = function (onComplete) {
        if (this.particle)
            TweenMax.to(this, (0.2 + Math.random()), { y: this.guide.length, height: this.endHeight, position: '+=6', ease: Linear.ease, onComplete: onComplete, onCompleteParams: [this] });
        else
            TweenMax.to(this, 0.5 + (Math.random()), { y: this.guide.length, height: this.endHeight, position: '+=6', ease: Power2.easeIn, onComplete: onComplete, onCompleteParams: [this] });
    };
    Flame.prototype.getPointAlongGuide = function (y, offsetXPercentage) {
        if (this.guide.length) {
            if (y >= this.guide.length)
                y = this.guide.length - 1;
            if (y < 0)
                y = 0;
            var thicknessDifference = this.endThickness - this.startThickness;
            var percentageAlongGuide = (y / this.guide.length) * 100;
            var thickness = this.startThickness + ((thicknessDifference / 100) * percentageAlongGuide);
            var xOffset = ((thickness / 2) / 100) * offsetXPercentage;
            return { x: this.guide[y].x + xOffset, y: this.guide[y].y };
        }
        return { x: 0, y: 0 };
    };
    Flame.prototype.drawPath = function (pathPoints) {
        var points = [];
        for (var i = 0; i < pathPoints.length; i++) {
            var subPoints = [];
            for (var j = 0; j < pathPoints[i].points.length / 2; j++) {
                var p = pathPoints[i].points.slice(j * 2, j * 2 + 2);
                var point = this.getPointAlongGuide(Math.round(p[1]), p[0]);
                subPoints.push(point.x);
                subPoints.push(point.y);
            }
            points.push(pathPoints[i].type + subPoints.join(' '));
        }
        return points.join(' ') + 'Z';
    };
    Flame.prototype.draw = function () {
        if (this.height > 0) {
            var y = Math.round(this.y);
            var height = Math.round(this.height);
            var heightChunks = height / 6;
            // 			let xInc = 5;
            // 			let yInc = 0.1;
            // 			let x = xInc;
            // 			let y = yInc;
            // 			let flamePoints = [];
            // 			for(let i = 0; i < 20; i++)
            // 			{
            // 				flamePoints.push(x);
            // 				flamePoints.push(y);
            // 				x += xInc;
            // 				y += yInc;
            // 			} 
            // 			for(let i = 0; i < 20; i++)
            // 			{
            // 				flamePoints.push(x);
            // 				flamePoints.push(y);
            // 				x -= xInc;
            // 				y += yInc;
            // 			} 
            // 			for(let i = 0; i < 20; i++)
            // 			{
            // 				flamePoints.push(x);
            // 				flamePoints.push(y);
            // 				x -= xInc;
            // 				y -= yInc;
            // 			} 
            // 			for(let i = 0; i < 20; i++)
            // 			{
            // 				flamePoints.push(x);
            // 				flamePoints.push(y);
            // 				x += xInc;
            // 				y -= yInc;
            // 			} 
            // 			//console.log(flamePoints)
            // I want to change this bit, this array could be generated in a loop.
            var body = this.particle ? [{ type: 'M', points: [0, y] },
                { type: 'L', points: [10, y - heightChunks * 0.2,
                        20, y - heightChunks * 0.4,
                        30, y - heightChunks * 0.6,] }] : [
                { type: 'M', points: [0, y] },
                { type: 'L', points: [10, y - heightChunks * 0.2,
                        20, y - heightChunks * 0.4,
                        30, y - heightChunks * 0.6,
                        40, y - heightChunks * 0.8,
                        50, y - heightChunks * 1,
                        60, y - heightChunks * 1.2,
                        70, y - heightChunks * 1.4,
                        80, y - heightChunks * 1.6,
                        90, y - heightChunks * 1.8,
                        90, y - heightChunks * 2,
                        90, y - heightChunks * 2.2,
                        80, y - heightChunks * 2.4,
                        70, y - heightChunks * 2.6,
                        60, y - heightChunks * 2.8,
                        50, y - heightChunks * 3,
                        40, y - heightChunks * 3.1,
                        30, y - heightChunks * 3.2,
                        20, y - heightChunks * 3.3,
                        10, y - heightChunks * 3.4,
                        0, y - heightChunks * 3.5,
                        -10, y - heightChunks * 3.4,
                        -20, y - heightChunks * 3.3,
                        -30, y - heightChunks * 3.2,
                        -40, y - heightChunks * 3.1,
                        -50, y - heightChunks * 3,
                        -60, y - heightChunks * 2.8,
                        -70, y - heightChunks * 2.6,
                        -80, y - heightChunks * 2.4,
                        -90, y - heightChunks * 2.2,
                        -90, y - heightChunks * 2,
                        -90, y - heightChunks * 1.8,
                        -80, y - heightChunks * 1.6,
                        -70, y - heightChunks * 1.4,
                        -60, y - heightChunks * 1.2,
                        -50, y - heightChunks * 1,
                        -40, y - heightChunks * 0.8,
                        -30, y - heightChunks * 0.6,
                        -20, y - heightChunks * 0.4,
                        -10, y - heightChunks * 0.2,
                        0, y - heightChunks * 0,
                    ] },
            ];
            this.body.attr({ d: this.drawPath(body) });
        }
    };
    return Flame;
}());
var StageManager = /** @class */ (function () {
    function StageManager(svg) {
        this.svg = svg;
        this.fire = {};
        this.size = { width: 0, height: 0 };
    }
    StageManager.prototype.init = function () {
        var _this = this;
        window.addEventListener('resize', function () { return _this.onResize(); }, true);
        this.onResize();
        this.tick();
    };
    StageManager.prototype.onResize = function () {
        this.size.width = 400;
        this.size.height = 800;
        this.svg
            .attr('width', this.size.width)
            .attr('height', this.size.height);
    };
    StageManager.prototype.addFlame = function () {
        var _this = this;
        var particle = Math.random() > .8;
        var start = { x: this.size.width / 2, y: this.size.height - (40 + Math.random() * 20) };
        var end = { x: (this.size.width / 4) + Math.random() * (this.size.width / 2), y: particle ? -20 : this.size.height / 3 };
        var width = this.size.width / 4;
        var flame = new Flame(this.svg, start, end, width, particle);
        flame.start(function (flame) { return _this.removeFlame(flame); });
        this.fire[flame.id] = flame;
    };
    StageManager.prototype.removeFlame = function (flame) {
        delete this.fire[flame.id];
        flame.remove();
        flame = null;
    };
    StageManager.prototype.tick = function () {
        var _this = this;
        for (var i_1 in this.fire) {
            this.fire[i_1].draw();
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    return StageManager;
}());
var stageManager = new StageManager(Snap('svg'));
stageManager.init();
makeFlame();
function makeFlame() {
    stageManager.addFlame();
    setTimeout(makeFlame, Math.random() * 60);
}
//// =========
//
//   Below is some old code from Stick Drawer
//
//   https://codepen.io/steveg3003/pen/vXmXbY
//
//// =========
if (window.CP && window.CP.PenTimer)
    window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
var SVG = Snap('#svg');
var container = $('.container');
var sizes = {};
sizes.container = { width: 0, height: 0 };
var colors = {
    stick: {
        dark: '#4C3E26',
        base: '#755F3B',
        light: ['#F9ECA9', '#EFC900', '#D79700', '#D0BB48'],
        inside: '#937B55'
    },
    leaf: {
        light: '#46611F',
        base: '#3A5019',
        dark: '#324516'
    }
};
var stickStep = 30;
var drawRight = 0;
var stickThickness = 20;
onResize();
var randomness = [];
var specials = [];
var drawing = [];
var drawPath = SVG.path().attr({
    fill: "none",
    stroke: "#ff0000",
    strokeWidth: 0,
    strokeDasharray: '5 5'
});
var stick = SVG.group();
var stickBack;
var stickFront;
var stickEnd;
var stickBase = stick.path().attr({
    fill: colors.stick.base,
    stroke: "#000000",
    strokeWidth: 0
});
var autoStickSpeed = 0;
var autoStick = [];
var autoStickMarginWidth = 60;
var autoStickMarginHeight = 10;
var count = Math.round((sizes.container.width - (autoStickMarginWidth * 2)) / (stickStep) + 4);
for (var i = 0; i < count; i++) {
    if (i == 0) {
        var x = autoStickMarginWidth;
        var y = sizes.container.height - 50;
        autoStick.push([x, y]);
        startDrawing({ offsetX: x, offsetY: y, auto: true });
    }
    else {
        var newY = autoStick[i - 1][1] + (Math.random() * 10) - 5;
        if (newY < autoStickMarginHeight)
            newY = autoStickMarginHeight;
        else if (newY > sizes.container.height - autoStickMarginHeight)
            newY = sizes.container.height - autoStickMarginHeight;
        autoStick.push([autoStickMarginWidth + (i * stickStep), newY]);
        draw({ offsetX: autoStickMarginWidth + (i * stickStep), offsetY: newY });
    }
}
//drawAutoStick(true)
drawAutoStick();
function drawAutoStick(first) {
    drawAll();
    setTimeout(drawAutoStick, 50 + Math.random() * 50);
}
function startDrawing(e) {
    console.log('startDrawing', e);
    drawing = [[e.offsetX, e.offsetY]];
    randomness = [[0, 0, 0, 0]];
    specials = [null];
    if (!e.auto) {
        container.on('mousemove', draw);
        container.on('mouseup', stopDrawing);
    }
}
function draw(e) {
    console.log(e);
    if (drawing.length == 1 && e.offsetX != drawing[0][0]) {
        drawRight = e.offsetX > drawing[0][0] ? true : false;
    }
    console.log(drawing);
    var oldX = drawing[drawing.length - 1][0];
    var newX = e.offsetX;
    if ((drawRight && newX - oldX > stickStep) || (!drawRight && oldX - newX > stickStep)) {
        drawing.push([e.offsetX, e.offsetY]);
        randomness.push([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]);
        specials.push(null);
        drawAll();
    }
}
function drawAll() {
    drawStick();
    drawLine();
    if (stickBack)
        stickBack.remove();
    stickBack = stick.group();
    //drawSpecials(['twig_back', 'leaf_back'], stickBack);
    for (var i = 0; i <= 10; i++) {
        drawGrain(stickBack, drawPath, stickThickness - ((stickThickness / 100) * 20));
    }
    if (stickEnd)
        stickEnd.remove();
    stickEnd = stick.group();
    drawStickEnd();
    if (stickFront)
        stickFront.remove();
    stickFront = stick.group();
    for (var i = 0; i <= 10; i++) {
        drawGrain(stickFront, drawPath, stickThickness - ((stickThickness / 100) * 20));
    }
    //drawSpecials(['twig_front', 'leaf_front'], stickFront);
}
function stopDrawing(e) {
    container.off('mousemove');
    //container.off('mousedown');
    container.off('mouseup');
}
function drawLine() {
    var lineStr = '';
    for (var i = 0; i < drawing.length; i++) {
        lineStr += drawing[i].join(',') + ' ';
    }
    drawPath.attr('d', "M" + lineStr);
}
function drawStick() {
    var stickStr = '';
    var i;
    for (i = 0; i < drawing.length; i++) {
        stickStr += getStickPathPoint(drawing[i][0], drawing[i][1], -stickThickness, randomness[i][0], randomness[i][1]).join(',') + ' ';
    }
    for (i = drawing.length - 1; i >= 0; i--) {
        stickStr += getStickPathPoint(drawing[i][0], drawing[i][1], stickThickness, randomness[i][2], randomness[i][3]).join(',') + ' ';
    }
    stickBase.attr('d', "M" + stickStr + ' Z');
}
function getStickEnd(i, yOffset) {
    var newString = '';
    var curve = i > 0 ? stickThickness : -stickThickness;
    newString += 'Q' + getStickPathPoint(drawing[i][0] + curve, drawing[i][1], 0, 0, 0) + ' ';
    newString += '' + getStickPathPoint(drawing[i][0], drawing[i][1], yOffset, randomness[i][0], randomness[i][1]).join(',') + ' ';
    return newString;
}
function getStickPathPoint(x, y, yOffset, xRandom, yRandom) {
    var x = x + (xRandom * 20);
    var y = y + yOffset + (yRandom * 10);
    return [x, y];
}
function getLineColor(offset, range) {
    var range = ((range * 2) / 3) / 2;
    if (offset > range || Math.random() < 0.02)
        return colors.stick.dark;
    if (offset < -range || Math.random() < 0.1)
        return colors.stick.light[Math.floor(Math.random() * colors.stick.light.length)];
    return colors.stick.base;
}
function drawGrain(holder, path, offset) {
    var lengthChunks = 20;
    var length = path.getTotalLength();
    var count = length / lengthChunks;
    var toReturn = [];
    // get points along the path
    var points = [];
    for (var i = 0; i < count; i++) {
        var p = path.getPointAtLength(lengthChunks * i);
        points.push([p.x, p.y]);
    }
    // group points into chunks
    var chunks = [[]];
    var translateY = (Math.random() * (offset * 2)) - offset;
    var grainColors = [getLineColor(translateY, offset)];
    while (points.length) {
        if (chunks[0].length > 2 && points.length > 2 && Math.random() < 0.2) {
            translateY = (Math.random() * (offset * 2)) - offset;
            chunks.unshift([]);
            grainColors.unshift(getLineColor(translateY, offset));
        }
        var toAdd = points.shift();
        toAdd[1] += translateY;
        if (drawRight)
            toAdd[0] -= offset - Math.abs(translateY);
        else
            toAdd[0] += offset - Math.abs(translateY);
        chunks[0].push(toAdd);
    }
    // make path strings from chunks
    for (var i = 0; i < chunks.length; i++) {
        var pathString = 'M';
        for (var j = 0; j < chunks[i].length; j++) {
            pathString += chunks[i][j].join(',') + ' ';
        }
        var grain = holder.path(pathString)
            .attr({
            fill: 'none',
            stroke: grainColors[i],
            strokeWidth: 4 + (Math.random() * 8),
            'stroke-linecap': "round"
        });
        //toReturn.push(pathString);
    }
    return toReturn;
}
function drawStickEnd() {
    var point = drawing[drawing.length - 1];
    stickEnd.ellipse(point[0] + (drawRight ? -3 : 3), point[1], stickThickness / 1.5, stickThickness)
        .attr({
        fill: colors.stick.inside
    });
    stickEnd.ellipse(point[0] + (drawRight ? -3 : 3), point[1], 2, 3)
        .attr({
        fill: colors.stick.light,
        opacity: Math.random()
    });
    var endCurve = 'M';
    endCurve += point[0] + ',' + (point[1] - (stickThickness / 2));
    endCurve += ' Q' + (point[0] + (stickThickness / (2 + Math.random())) + (drawRight ? -3 : 3)) + ',' + (point[1] - (stickThickness / 2));
    endCurve += ' ' + (point[0] + (stickThickness / (2 + Math.random())) + (drawRight ? -3 : 3)) + ',' + point[1];
    endCurve += ' Q' + (point[0] + (stickThickness / (2 + Math.random())) + (drawRight ? -3 : 3)) + ',' + (point[1] + (stickThickness / 2));
    endCurve += ' ' + (point[0] + (drawRight ? -3 : 3)) + ',' + (point[1] + (stickThickness / 2));
    endCurve += ' Q' + (point[0] - (stickThickness / (2 + Math.random())) + (drawRight ? -3 : 3)) + ',' + (point[1] + (stickThickness / 2));
    endCurve += ' ' + (point[0] - (stickThickness / (2 + Math.random())) + (drawRight ? -3 : 3)) + ',' + point[1];
    stickEnd.path(endCurve)
        .attr({
        fill: 'none',
        stroke: colors.stick.light,
        strokeWidth: 1 + (Math.random() * 2)
    });
}
function onResize() {
    sizes.container.width = 400;
    sizes.container.height = 800;
    console.log('sizes', sizes);
}