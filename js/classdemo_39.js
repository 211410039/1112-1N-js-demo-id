const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w01_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w02_39-tictactoe/tictactoe_39.html' width="100%" height="100%"/>`;
            break;
        case 'w3':
            showDemo.innerHTML = `<iframe src='./demo/w03_39-review/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w4':
            showDemo.innerHTML = `<iframe src='./demo/w04_39-menu/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w5':
            showDemo.innerHTML = `<iframe src='./demo/w05_39-menu/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w6':
            showDemo.innerHTML = `<iframe src='./demo/w06_39-array/p2_39/p2_39.html' width="100%" height="100%"/>`;
            break;
        case 'w9-1':
            showDemo.innerHTML = `<iframe src='./demo/w09_39-midrep/p1_bmi_39/p1_39.html' width="100%" height="100%"/>`;
            break;
        case 'w9-2':
            showDemo.innerHTML = `<iframe src='./demo/w09_39-midrep/p2_counter_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'w9-3':
            showDemo.innerHTML = `<iframe src='./demo/w09_39-midrep/p3_tour_39/index.html' width="100%" height="100%"/>`;
            break;
    }

}