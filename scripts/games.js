
class Arrow{
    valueX;
    element;

    constructor(element){
        this.valueX = 70;
        this.element = element;
        this.moveElement();
    }

    moveElement() {
        $(this.element).css({left:`${this.valueX}px`});
    }

    hitCircle() {
		const target = document.querySelector("#redCircle");
		return elOverlap(target, this.element);
	}

	moveObject() {
		this.valueX += 10;
		this.moveElement();
	}
}

function elOverlap(e1, e2) {
	const first = e1.getBoundingClientRect();
	const second = e2.getBoundingClientRect();

	return !(
	    first.top > second.bottom ||
		first.right < second.left ||
		first.bottom < second.top ||
		first.left > second.right
	);
}

$(document).ready(function () {
	const arrows = [];
	let count = 0;
	let tarInterval = setInterval(() => {
		$("#all").animate({
			top: `${Math.floor((Math.random() * screen.height) / 1.5)}px`,
		});
	}, 2500);
	let arrInterval = setInterval(() => {
		arrows.forEach((b, i) => {
			b.moveObject();
                if (b.hitCircle()) {
                    document.body.removeChild(b.element);
                    arrows.splice(i, 1);
                    count++;
                    $("#count").text(count);
                    if(count > 20)
                    document.write("YOU WIN");
                }
            
            
			
		});
	}, 25);

	document.addEventListener("keyup", (e) => {
		if (e.code === "Space") {
			const element = document.createElement("div");
			element.className = "arrow";
			document.body.appendChild(element);
			const newArrow = new Arrow(element);
			arrows.push(newArrow);
		}
	});
});

$(document).ready(function() {
    
    let gameInterval = setInterval(() => {
        $("#all").animate({
            top: `${Math.floor((Math.random() * screen.height) / 1.5)}px`,
        });
    }, 2000);

    
})





