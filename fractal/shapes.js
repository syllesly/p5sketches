var shapes={};
shapes["T-Square"]={
    points: 4,
    i: () => {
        var val=r!=(prev+2)%nrPoints;
        return val;
    }
}
shapes["Sierpinski Triangle"]={
    points: 3,
    i: () => {
        return true;
    }
}
shapes["Snow"]={
    points: 5,
    i: () => {
        var val=r!=prev;
        return val;
    }
}
shapes["Star"]={
    points: 5,
    i: () => {
        var val=r!=(prev+1)%nrPoints && r!=(prev+4)%nrPoints && r!=(dprev+1)%nrPoints && r!=(dprev+4)%nrPoints;
        return val;
    }
}