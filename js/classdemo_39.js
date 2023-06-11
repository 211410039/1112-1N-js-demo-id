const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch (week) {
        case 'Home':
            showDemo.innerHTML = `<iframe src='./index.html' width="100%" height="100%"/>`;
            break;
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w01_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'w1-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w01_39/w01_39.html' width="100%" height="100%"/>`;
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w02_39-tictactoe/tictactoe_39.html' width="100%" height="100%"/>`;
            break;
        case 'w2-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w02_39/w02_39.html' width="100%" height="100%"/>`;
            break;
        case 'w3':
            showDemo.innerHTML = `<iframe src='./demo/w03_39-review/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w3-md':
            showDemo.innerHTML = `<iframe src='../demo/md/w03_39/w03_39.html' width="100%" height="100%"/>`;
            break;
        case 'w4':
            showDemo.innerHTML = `<iframe src='./demo/w04_39-menu/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w4-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w04_39/w04_39.html' width="100%" height="100%"/>`;
            break;
        case 'w5-1':
            showDemo.innerHTML = `<iframe src='./demo/w05_39-menu/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w5-1-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w05_39/w05_39.html' width="100%" height="100%"/>`;
            break;
        case 'w5-2':
            showDemo.innerHTML = `<iframe src='./demo/w05_39-modal/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w5-2-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w05_39/w05_39.html' width="100%" height="100%"/>`;
            break;
        case 'w6':
            showDemo.innerHTML = `<iframe src='./demo/w06_39-array/p3_39/p3_39.html' width="100%" height="100%"/>`;
            break;
        case 'w6-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w06_39/w06_39.html' width="100%" height="100%"/>`;
            break;
        case 'w9-1':
            showDemo.innerHTML = `<iframe src='./demo/w09_39-midrep/p1_bmi_39/p1_39.html' width="100%" height="100%"/>`;
            break;
        case 'w9-1-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w09_39/w09_39.html' width="100%" height="100%"/>`;
            break;
        case 'w9-2':
            showDemo.innerHTML = `<iframe src='./demo/w09_39-midrep/p2_counter_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'w9-2-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w09_39/w09_39.html' width="100%" height="100%"/>`;
            break;
        case 'w9-3':
            showDemo.innerHTML = `<iframe src='./demo/w09_39-midrep/p3_tour_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'w9-3-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w09_39/w09_39.html' width="100%" height="100%"/>`;
            break;
            case 'w10-1':
            showDemo.innerHTML = `<iframe src='./demo/w11-midterm/midterm_39/midterm_39/p2_39/p2_39.html' width="100%" height="100%"/>`;
            break;
            case 'w10-2':
            showDemo.innerHTML = `<iframe src='./demo/w11-midterm/midterm_39/midterm_39/p3_39/p3_39.html' width="100%" height="100%"/>`;
            break;
        case 'w11':
            showDemo.innerHTML = `<iframe src='./demo/w11-midterm/midterm_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'w11-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w11_39/p11_39.html' width="100%" height="100%"/>`;
            break;
        case 'w12':
            showDemo.innerHTML = `<iframe src='./demo/w12/6-promise-async-await/index.html' width="100%" height="100%"/>`;
            break;
        case 'w12-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w12_39/w12_39.html' width="100%" height="100%"/>`;
            break;
        case 'w13':
            showDemo.innerHTML = `<iframe src='./demo/w13_39-menu-api/index_39.html' width="100%" height="100%"/>`;
            break;
        case 'w13-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w13_39/w13_39.html' width="100%" height="100%"/>`;
            break;
        case 'w14':
            showDemo.innerHTML = `<iframe src='./demo/w14_39-products-api/index.html' width="100%" height="100%"/>`;
            break;
        case 'w14-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w14_39/w14_39.html' width="100%" height="100%"/>`;
            break;
        case 'w15':
            showDemo.innerHTML = `<iframe src='./demo/w15_39-store-product/index.html' width="100%" height="100%"/>`;
            break;
        case 'w15-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w15_39/w15_39.html' width="100%" height="100%"/>`;
            break;
        case 'w16':
            showDemo.innerHTML = `<iframe src='./demo/w16_39-meal-finder/index.html' width="100%" height="100%"/>`;
            break;
        case 'w16-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w16_39/w16_39.html' width="100%" height="100%"/>`;
            break;
        case 'w17-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w17_39/w17_39.html' width="100%" height="100%"/>`;
            break;
        case 'Contact':
            showDemo.innerHTML = `<iframe src='./contact_39.html' width="100%" height="100%"/>`;
            break;
        case 'Api-Project':
            showDemo.innerHTML = `<iframe src='./demo/api_project_39/index.html' width="100%" height="100%"/>`;
            break;
        case 'api-md':
            showDemo.innerHTML = `<iframe src='./demo/md/api_39/api.html' width="100%" height="100%"/>`;
            break;
        case 'api-p1':
            showDemo.innerHTML = `<iframe src='./demo/md/api_39/api-1.html' width="100%" height="100%"/>`;
            break;
        case 'api-p2':
            showDemo.innerHTML = `<iframe src='./demo/md/api_39/api-2.html' width="100%" height="100%"/>`;
            break;
        case 'api-p3':
            showDemo.innerHTML = `<iframe src='./demo/md/api_39/api-3.html' width="100%" height="100%"/>`;
            break;
        case 'api-p4':
            showDemo.innerHTML = `<iframe src='./demo/md/api_39/api-4.html' width="100%" height="100%"/>`;
            break;
    }

}