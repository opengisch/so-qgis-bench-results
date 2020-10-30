/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 217.0, "minX": 0.0, "maxY": 64066.0, "series": [{"data": [[0.0, 217.0], [0.1, 224.0], [0.2, 225.0], [0.3, 225.0], [0.4, 226.0], [0.5, 226.0], [0.6, 227.0], [0.7, 227.0], [0.8, 228.0], [0.9, 228.0], [1.0, 228.0], [1.1, 229.0], [1.2, 229.0], [1.3, 229.0], [1.4, 230.0], [1.5, 230.0], [1.6, 230.0], [1.7, 230.0], [1.8, 230.0], [1.9, 231.0], [2.0, 231.0], [2.1, 231.0], [2.2, 231.0], [2.3, 232.0], [2.4, 232.0], [2.5, 232.0], [2.6, 232.0], [2.7, 233.0], [2.8, 233.0], [2.9, 233.0], [3.0, 233.0], [3.1, 234.0], [3.2, 234.0], [3.3, 234.0], [3.4, 234.0], [3.5, 234.0], [3.6, 235.0], [3.7, 235.0], [3.8, 235.0], [3.9, 235.0], [4.0, 236.0], [4.1, 236.0], [4.2, 236.0], [4.3, 236.0], [4.4, 236.0], [4.5, 236.0], [4.6, 236.0], [4.7, 237.0], [4.8, 237.0], [4.9, 237.0], [5.0, 237.0], [5.1, 237.0], [5.2, 237.0], [5.3, 238.0], [5.4, 238.0], [5.5, 238.0], [5.6, 238.0], [5.7, 238.0], [5.8, 238.0], [5.9, 238.0], [6.0, 239.0], [6.1, 239.0], [6.2, 239.0], [6.3, 239.0], [6.4, 239.0], [6.5, 239.0], [6.6, 239.0], [6.7, 240.0], [6.8, 240.0], [6.9, 240.0], [7.0, 240.0], [7.1, 240.0], [7.2, 240.0], [7.3, 241.0], [7.4, 241.0], [7.5, 241.0], [7.6, 241.0], [7.7, 241.0], [7.8, 242.0], [7.9, 242.0], [8.0, 242.0], [8.1, 242.0], [8.2, 242.0], [8.3, 243.0], [8.4, 243.0], [8.5, 243.0], [8.6, 243.0], [8.7, 243.0], [8.8, 243.0], [8.9, 244.0], [9.0, 244.0], [9.1, 244.0], [9.2, 244.0], [9.3, 244.0], [9.4, 245.0], [9.5, 245.0], [9.6, 245.0], [9.7, 245.0], [9.8, 245.0], [9.9, 246.0], [10.0, 246.0], [10.1, 246.0], [10.2, 246.0], [10.3, 247.0], [10.4, 247.0], [10.5, 247.0], [10.6, 247.0], [10.7, 247.0], [10.8, 247.0], [10.9, 248.0], [11.0, 248.0], [11.1, 248.0], [11.2, 248.0], [11.3, 249.0], [11.4, 249.0], [11.5, 249.0], [11.6, 249.0], [11.7, 250.0], [11.8, 250.0], [11.9, 250.0], [12.0, 250.0], [12.1, 251.0], [12.2, 251.0], [12.3, 252.0], [12.4, 252.0], [12.5, 252.0], [12.6, 253.0], [12.7, 253.0], [12.8, 253.0], [12.9, 254.0], [13.0, 254.0], [13.1, 254.0], [13.2, 255.0], [13.3, 255.0], [13.4, 256.0], [13.5, 256.0], [13.6, 256.0], [13.7, 257.0], [13.8, 257.0], [13.9, 257.0], [14.0, 258.0], [14.1, 259.0], [14.2, 260.0], [14.3, 260.0], [14.4, 260.0], [14.5, 261.0], [14.6, 262.0], [14.7, 262.0], [14.8, 263.0], [14.9, 263.0], [15.0, 264.0], [15.1, 265.0], [15.2, 265.0], [15.3, 266.0], [15.4, 266.0], [15.5, 267.0], [15.6, 268.0], [15.7, 268.0], [15.8, 269.0], [15.9, 269.0], [16.0, 270.0], [16.1, 271.0], [16.2, 271.0], [16.3, 272.0], [16.4, 272.0], [16.5, 273.0], [16.6, 274.0], [16.7, 274.0], [16.8, 275.0], [16.9, 276.0], [17.0, 277.0], [17.1, 278.0], [17.2, 278.0], [17.3, 279.0], [17.4, 280.0], [17.5, 281.0], [17.6, 281.0], [17.7, 282.0], [17.8, 283.0], [17.9, 284.0], [18.0, 285.0], [18.1, 286.0], [18.2, 287.0], [18.3, 287.0], [18.4, 289.0], [18.5, 289.0], [18.6, 290.0], [18.7, 291.0], [18.8, 292.0], [18.9, 293.0], [19.0, 294.0], [19.1, 295.0], [19.2, 295.0], [19.3, 296.0], [19.4, 296.0], [19.5, 296.0], [19.6, 297.0], [19.7, 297.0], [19.8, 298.0], [19.9, 298.0], [20.0, 299.0], [20.1, 299.0], [20.2, 299.0], [20.3, 300.0], [20.4, 301.0], [20.5, 301.0], [20.6, 301.0], [20.7, 301.0], [20.8, 302.0], [20.9, 302.0], [21.0, 302.0], [21.1, 302.0], [21.2, 302.0], [21.3, 303.0], [21.4, 303.0], [21.5, 303.0], [21.6, 303.0], [21.7, 304.0], [21.8, 304.0], [21.9, 304.0], [22.0, 304.0], [22.1, 304.0], [22.2, 304.0], [22.3, 305.0], [22.4, 305.0], [22.5, 305.0], [22.6, 305.0], [22.7, 306.0], [22.8, 306.0], [22.9, 306.0], [23.0, 306.0], [23.1, 307.0], [23.2, 307.0], [23.3, 307.0], [23.4, 307.0], [23.5, 307.0], [23.6, 308.0], [23.7, 308.0], [23.8, 308.0], [23.9, 308.0], [24.0, 309.0], [24.1, 309.0], [24.2, 309.0], [24.3, 309.0], [24.4, 310.0], [24.5, 310.0], [24.6, 310.0], [24.7, 310.0], [24.8, 311.0], [24.9, 311.0], [25.0, 311.0], [25.1, 311.0], [25.2, 311.0], [25.3, 312.0], [25.4, 312.0], [25.5, 312.0], [25.6, 313.0], [25.7, 313.0], [25.8, 313.0], [25.9, 313.0], [26.0, 314.0], [26.1, 314.0], [26.2, 314.0], [26.3, 315.0], [26.4, 315.0], [26.5, 315.0], [26.6, 315.0], [26.7, 316.0], [26.8, 316.0], [26.9, 316.0], [27.0, 316.0], [27.1, 317.0], [27.2, 317.0], [27.3, 317.0], [27.4, 317.0], [27.5, 318.0], [27.6, 318.0], [27.7, 318.0], [27.8, 319.0], [27.9, 319.0], [28.0, 319.0], [28.1, 320.0], [28.2, 320.0], [28.3, 320.0], [28.4, 320.0], [28.5, 321.0], [28.6, 321.0], [28.7, 322.0], [28.8, 322.0], [28.9, 323.0], [29.0, 323.0], [29.1, 324.0], [29.2, 324.0], [29.3, 324.0], [29.4, 324.0], [29.5, 325.0], [29.6, 325.0], [29.7, 325.0], [29.8, 326.0], [29.9, 326.0], [30.0, 326.0], [30.1, 327.0], [30.2, 327.0], [30.3, 327.0], [30.4, 327.0], [30.5, 328.0], [30.6, 328.0], [30.7, 329.0], [30.8, 329.0], [30.9, 330.0], [31.0, 330.0], [31.1, 331.0], [31.2, 331.0], [31.3, 331.0], [31.4, 332.0], [31.5, 332.0], [31.6, 332.0], [31.7, 333.0], [31.8, 333.0], [31.9, 334.0], [32.0, 334.0], [32.1, 334.0], [32.2, 335.0], [32.3, 335.0], [32.4, 336.0], [32.5, 336.0], [32.6, 336.0], [32.7, 337.0], [32.8, 337.0], [32.9, 338.0], [33.0, 338.0], [33.1, 339.0], [33.2, 339.0], [33.3, 340.0], [33.4, 340.0], [33.5, 341.0], [33.6, 341.0], [33.7, 342.0], [33.8, 343.0], [33.9, 343.0], [34.0, 344.0], [34.1, 345.0], [34.2, 345.0], [34.3, 346.0], [34.4, 346.0], [34.5, 346.0], [34.6, 346.0], [34.7, 347.0], [34.8, 348.0], [34.9, 348.0], [35.0, 349.0], [35.1, 350.0], [35.2, 350.0], [35.3, 350.0], [35.4, 351.0], [35.5, 351.0], [35.6, 353.0], [35.7, 353.0], [35.8, 354.0], [35.9, 354.0], [36.0, 354.0], [36.1, 355.0], [36.2, 356.0], [36.3, 357.0], [36.4, 357.0], [36.5, 358.0], [36.6, 358.0], [36.7, 359.0], [36.8, 360.0], [36.9, 361.0], [37.0, 362.0], [37.1, 362.0], [37.2, 362.0], [37.3, 363.0], [37.4, 364.0], [37.5, 364.0], [37.6, 365.0], [37.7, 365.0], [37.8, 366.0], [37.9, 367.0], [38.0, 367.0], [38.1, 368.0], [38.2, 368.0], [38.3, 369.0], [38.4, 369.0], [38.5, 370.0], [38.6, 370.0], [38.7, 370.0], [38.8, 371.0], [38.9, 371.0], [39.0, 372.0], [39.1, 373.0], [39.2, 373.0], [39.3, 374.0], [39.4, 374.0], [39.5, 375.0], [39.6, 375.0], [39.7, 377.0], [39.8, 377.0], [39.9, 377.0], [40.0, 378.0], [40.1, 378.0], [40.2, 379.0], [40.3, 380.0], [40.4, 380.0], [40.5, 382.0], [40.6, 383.0], [40.7, 384.0], [40.8, 384.0], [40.9, 385.0], [41.0, 385.0], [41.1, 386.0], [41.2, 387.0], [41.3, 387.0], [41.4, 388.0], [41.5, 389.0], [41.6, 391.0], [41.7, 391.0], [41.8, 391.0], [41.9, 392.0], [42.0, 393.0], [42.1, 394.0], [42.2, 394.0], [42.3, 395.0], [42.4, 396.0], [42.5, 397.0], [42.6, 398.0], [42.7, 398.0], [42.8, 399.0], [42.9, 401.0], [43.0, 402.0], [43.1, 403.0], [43.2, 404.0], [43.3, 404.0], [43.4, 405.0], [43.5, 405.0], [43.6, 406.0], [43.7, 407.0], [43.8, 408.0], [43.9, 408.0], [44.0, 409.0], [44.1, 410.0], [44.2, 411.0], [44.3, 412.0], [44.4, 412.0], [44.5, 413.0], [44.6, 414.0], [44.7, 415.0], [44.8, 416.0], [44.9, 417.0], [45.0, 418.0], [45.1, 418.0], [45.2, 419.0], [45.3, 420.0], [45.4, 421.0], [45.5, 422.0], [45.6, 424.0], [45.7, 424.0], [45.8, 426.0], [45.9, 428.0], [46.0, 428.0], [46.1, 429.0], [46.2, 430.0], [46.3, 431.0], [46.4, 434.0], [46.5, 435.0], [46.6, 436.0], [46.7, 436.0], [46.8, 437.0], [46.9, 439.0], [47.0, 440.0], [47.1, 442.0], [47.2, 443.0], [47.3, 444.0], [47.4, 445.0], [47.5, 447.0], [47.6, 447.0], [47.7, 448.0], [47.8, 450.0], [47.9, 451.0], [48.0, 451.0], [48.1, 454.0], [48.2, 455.0], [48.3, 457.0], [48.4, 457.0], [48.5, 459.0], [48.6, 460.0], [48.7, 461.0], [48.8, 461.0], [48.9, 462.0], [49.0, 464.0], [49.1, 465.0], [49.2, 466.0], [49.3, 468.0], [49.4, 469.0], [49.5, 470.0], [49.6, 471.0], [49.7, 471.0], [49.8, 473.0], [49.9, 474.0], [50.0, 475.0], [50.1, 477.0], [50.2, 478.0], [50.3, 479.0], [50.4, 480.0], [50.5, 482.0], [50.6, 484.0], [50.7, 484.0], [50.8, 485.0], [50.9, 486.0], [51.0, 487.0], [51.1, 488.0], [51.2, 489.0], [51.3, 491.0], [51.4, 492.0], [51.5, 493.0], [51.6, 493.0], [51.7, 495.0], [51.8, 496.0], [51.9, 497.0], [52.0, 498.0], [52.1, 498.0], [52.2, 499.0], [52.3, 500.0], [52.4, 501.0], [52.5, 502.0], [52.6, 504.0], [52.7, 505.0], [52.8, 507.0], [52.9, 508.0], [53.0, 509.0], [53.1, 509.0], [53.2, 511.0], [53.3, 513.0], [53.4, 514.0], [53.5, 514.0], [53.6, 515.0], [53.7, 516.0], [53.8, 517.0], [53.9, 518.0], [54.0, 519.0], [54.1, 521.0], [54.2, 522.0], [54.3, 525.0], [54.4, 527.0], [54.5, 527.0], [54.6, 528.0], [54.7, 529.0], [54.8, 530.0], [54.9, 532.0], [55.0, 532.0], [55.1, 534.0], [55.2, 535.0], [55.3, 536.0], [55.4, 537.0], [55.5, 538.0], [55.6, 540.0], [55.7, 541.0], [55.8, 542.0], [55.9, 544.0], [56.0, 546.0], [56.1, 546.0], [56.2, 547.0], [56.3, 549.0], [56.4, 550.0], [56.5, 553.0], [56.6, 554.0], [56.7, 555.0], [56.8, 557.0], [56.9, 558.0], [57.0, 558.0], [57.1, 559.0], [57.2, 561.0], [57.3, 561.0], [57.4, 563.0], [57.5, 564.0], [57.6, 564.0], [57.7, 566.0], [57.8, 567.0], [57.9, 569.0], [58.0, 570.0], [58.1, 572.0], [58.2, 573.0], [58.3, 574.0], [58.4, 577.0], [58.5, 578.0], [58.6, 579.0], [58.7, 581.0], [58.8, 582.0], [58.9, 582.0], [59.0, 583.0], [59.1, 583.0], [59.2, 584.0], [59.3, 585.0], [59.4, 586.0], [59.5, 588.0], [59.6, 589.0], [59.7, 590.0], [59.8, 592.0], [59.9, 593.0], [60.0, 594.0], [60.1, 596.0], [60.2, 597.0], [60.3, 598.0], [60.4, 599.0], [60.5, 601.0], [60.6, 604.0], [60.7, 605.0], [60.8, 607.0], [60.9, 609.0], [61.0, 610.0], [61.1, 611.0], [61.2, 611.0], [61.3, 613.0], [61.4, 614.0], [61.5, 616.0], [61.6, 618.0], [61.7, 619.0], [61.8, 619.0], [61.9, 620.0], [62.0, 621.0], [62.1, 623.0], [62.2, 624.0], [62.3, 625.0], [62.4, 626.0], [62.5, 628.0], [62.6, 630.0], [62.7, 633.0], [62.8, 634.0], [62.9, 635.0], [63.0, 636.0], [63.1, 639.0], [63.2, 641.0], [63.3, 642.0], [63.4, 643.0], [63.5, 644.0], [63.6, 646.0], [63.7, 648.0], [63.8, 650.0], [63.9, 653.0], [64.0, 654.0], [64.1, 654.0], [64.2, 655.0], [64.3, 657.0], [64.4, 659.0], [64.5, 661.0], [64.6, 662.0], [64.7, 664.0], [64.8, 665.0], [64.9, 667.0], [65.0, 670.0], [65.1, 671.0], [65.2, 673.0], [65.3, 675.0], [65.4, 677.0], [65.5, 678.0], [65.6, 679.0], [65.7, 680.0], [65.8, 683.0], [65.9, 684.0], [66.0, 685.0], [66.1, 686.0], [66.2, 689.0], [66.3, 691.0], [66.4, 693.0], [66.5, 693.0], [66.6, 695.0], [66.7, 696.0], [66.8, 698.0], [66.9, 700.0], [67.0, 702.0], [67.1, 702.0], [67.2, 704.0], [67.3, 706.0], [67.4, 707.0], [67.5, 708.0], [67.6, 709.0], [67.7, 710.0], [67.8, 713.0], [67.9, 713.0], [68.0, 715.0], [68.1, 716.0], [68.2, 717.0], [68.3, 718.0], [68.4, 720.0], [68.5, 723.0], [68.6, 726.0], [68.7, 727.0], [68.8, 728.0], [68.9, 730.0], [69.0, 731.0], [69.1, 733.0], [69.2, 735.0], [69.3, 737.0], [69.4, 740.0], [69.5, 742.0], [69.6, 743.0], [69.7, 744.0], [69.8, 745.0], [69.9, 746.0], [70.0, 748.0], [70.1, 751.0], [70.2, 753.0], [70.3, 755.0], [70.4, 756.0], [70.5, 759.0], [70.6, 761.0], [70.7, 762.0], [70.8, 765.0], [70.9, 767.0], [71.0, 769.0], [71.1, 770.0], [71.2, 773.0], [71.3, 776.0], [71.4, 776.0], [71.5, 777.0], [71.6, 781.0], [71.7, 782.0], [71.8, 784.0], [71.9, 787.0], [72.0, 790.0], [72.1, 794.0], [72.2, 796.0], [72.3, 798.0], [72.4, 800.0], [72.5, 802.0], [72.6, 804.0], [72.7, 806.0], [72.8, 810.0], [72.9, 814.0], [73.0, 819.0], [73.1, 822.0], [73.2, 823.0], [73.3, 824.0], [73.4, 826.0], [73.5, 828.0], [73.6, 829.0], [73.7, 831.0], [73.8, 833.0], [73.9, 836.0], [74.0, 838.0], [74.1, 839.0], [74.2, 843.0], [74.3, 847.0], [74.4, 851.0], [74.5, 854.0], [74.6, 858.0], [74.7, 861.0], [74.8, 864.0], [74.9, 871.0], [75.0, 874.0], [75.1, 878.0], [75.2, 880.0], [75.3, 882.0], [75.4, 888.0], [75.5, 892.0], [75.6, 895.0], [75.7, 901.0], [75.8, 905.0], [75.9, 910.0], [76.0, 916.0], [76.1, 918.0], [76.2, 925.0], [76.3, 928.0], [76.4, 930.0], [76.5, 934.0], [76.6, 938.0], [76.7, 943.0], [76.8, 949.0], [76.9, 953.0], [77.0, 955.0], [77.1, 958.0], [77.2, 962.0], [77.3, 968.0], [77.4, 970.0], [77.5, 976.0], [77.6, 979.0], [77.7, 983.0], [77.8, 992.0], [77.9, 1002.0], [78.0, 1011.0], [78.1, 1015.0], [78.2, 1022.0], [78.3, 1026.0], [78.4, 1032.0], [78.5, 1036.0], [78.6, 1038.0], [78.7, 1043.0], [78.8, 1047.0], [78.9, 1056.0], [79.0, 1062.0], [79.1, 1068.0], [79.2, 1072.0], [79.3, 1075.0], [79.4, 1077.0], [79.5, 1081.0], [79.6, 1084.0], [79.7, 1087.0], [79.8, 1091.0], [79.9, 1096.0], [80.0, 1102.0], [80.1, 1106.0], [80.2, 1113.0], [80.3, 1117.0], [80.4, 1125.0], [80.5, 1130.0], [80.6, 1136.0], [80.7, 1140.0], [80.8, 1146.0], [80.9, 1153.0], [81.0, 1162.0], [81.1, 1171.0], [81.2, 1177.0], [81.3, 1181.0], [81.4, 1186.0], [81.5, 1193.0], [81.6, 1202.0], [81.7, 1211.0], [81.8, 1217.0], [81.9, 1223.0], [82.0, 1235.0], [82.1, 1243.0], [82.2, 1254.0], [82.3, 1260.0], [82.4, 1278.0], [82.5, 1289.0], [82.6, 1297.0], [82.7, 1307.0], [82.8, 1319.0], [82.9, 1331.0], [83.0, 1340.0], [83.1, 1352.0], [83.2, 1375.0], [83.3, 1387.0], [83.4, 1403.0], [83.5, 1429.0], [83.6, 1446.0], [83.7, 1458.0], [83.8, 1476.0], [83.9, 1491.0], [84.0, 1499.0], [84.1, 1509.0], [84.2, 1518.0], [84.3, 1548.0], [84.4, 1566.0], [84.5, 1574.0], [84.6, 1582.0], [84.7, 1590.0], [84.8, 1595.0], [84.9, 1597.0], [85.0, 1602.0], [85.1, 1607.0], [85.2, 1612.0], [85.3, 1618.0], [85.4, 1621.0], [85.5, 1624.0], [85.6, 1626.0], [85.7, 1627.0], [85.8, 1632.0], [85.9, 1634.0], [86.0, 1637.0], [86.1, 1639.0], [86.2, 1642.0], [86.3, 1645.0], [86.4, 1649.0], [86.5, 1651.0], [86.6, 1655.0], [86.7, 1657.0], [86.8, 1659.0], [86.9, 1663.0], [87.0, 1664.0], [87.1, 1665.0], [87.2, 1669.0], [87.3, 1675.0], [87.4, 1677.0], [87.5, 1679.0], [87.6, 1684.0], [87.7, 1687.0], [87.8, 1689.0], [87.9, 1696.0], [88.0, 1699.0], [88.1, 1707.0], [88.2, 1711.0], [88.3, 1713.0], [88.4, 1716.0], [88.5, 1719.0], [88.6, 1725.0], [88.7, 1727.0], [88.8, 1733.0], [88.9, 1735.0], [89.0, 1741.0], [89.1, 1744.0], [89.2, 1746.0], [89.3, 1748.0], [89.4, 1752.0], [89.5, 1755.0], [89.6, 1760.0], [89.7, 1765.0], [89.8, 1768.0], [89.9, 1771.0], [90.0, 1776.0], [90.1, 1783.0], [90.2, 1784.0], [90.3, 1788.0], [90.4, 1790.0], [90.5, 1795.0], [90.6, 1801.0], [90.7, 1808.0], [90.8, 1812.0], [90.9, 1814.0], [91.0, 1819.0], [91.1, 1831.0], [91.2, 1834.0], [91.3, 1837.0], [91.4, 1844.0], [91.5, 1848.0], [91.6, 1852.0], [91.7, 1858.0], [91.8, 1863.0], [91.9, 1867.0], [92.0, 1875.0], [92.1, 1887.0], [92.2, 1890.0], [92.3, 1894.0], [92.4, 1904.0], [92.5, 1907.0], [92.6, 1919.0], [92.7, 1928.0], [92.8, 1934.0], [92.9, 1948.0], [93.0, 1959.0], [93.1, 1974.0], [93.2, 1980.0], [93.3, 1989.0], [93.4, 1999.0], [93.5, 2004.0], [93.6, 2011.0], [93.7, 2040.0], [93.8, 2045.0], [93.9, 2058.0], [94.0, 2076.0], [94.1, 2085.0], [94.2, 2102.0], [94.3, 2136.0], [94.4, 2147.0], [94.5, 2151.0], [94.6, 2161.0], [94.7, 2173.0], [94.8, 2196.0], [94.9, 2228.0], [95.0, 2253.0], [95.1, 2281.0], [95.2, 2288.0], [95.3, 2324.0], [95.4, 2340.0], [95.5, 2384.0], [95.6, 2407.0], [95.7, 2437.0], [95.8, 2486.0], [95.9, 2532.0], [96.0, 2550.0], [96.1, 2582.0], [96.2, 2639.0], [96.3, 2694.0], [96.4, 2751.0], [96.5, 2780.0], [96.6, 2892.0], [96.7, 2953.0], [96.8, 3012.0], [96.9, 3096.0], [97.0, 3153.0], [97.1, 3236.0], [97.2, 3263.0], [97.3, 3338.0], [97.4, 3422.0], [97.5, 3554.0], [97.6, 3595.0], [97.7, 3709.0], [97.8, 3760.0], [97.9, 3834.0], [98.0, 3857.0], [98.1, 3875.0], [98.2, 3964.0], [98.3, 4007.0], [98.4, 4223.0], [98.5, 4391.0], [98.6, 4680.0], [98.7, 4988.0], [98.8, 5170.0], [98.9, 5439.0], [99.0, 5855.0], [99.1, 6079.0], [99.2, 6639.0], [99.3, 8915.0], [99.4, 9760.0], [99.5, 11061.0], [99.6, 20757.0], [99.7, 31594.0], [99.8, 40440.0], [99.9, 64065.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1172.0, "series": [{"data": [[600.0, 334.0], [700.0, 286.0], [800.0, 171.0], [900.0, 113.0], [1000.0, 110.0], [1100.0, 83.0], [1200.0, 53.0], [1300.0, 40.0], [1400.0, 33.0], [1500.0, 51.0], [1600.0, 157.0], [1700.0, 134.0], [1800.0, 92.0], [1900.0, 54.0], [2000.0, 39.0], [2100.0, 34.0], [2300.0, 17.0], [2200.0, 22.0], [2400.0, 16.0], [2500.0, 12.0], [2600.0, 11.0], [2700.0, 10.0], [2800.0, 5.0], [2900.0, 7.0], [3000.0, 9.0], [3100.0, 5.0], [3200.0, 12.0], [3300.0, 7.0], [3400.0, 4.0], [3500.0, 8.0], [3700.0, 9.0], [3600.0, 4.0], [3800.0, 14.0], [3900.0, 8.0], [4000.0, 3.0], [4300.0, 4.0], [4100.0, 2.0], [4200.0, 4.0], [4500.0, 1.0], [4600.0, 3.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 4.0], [5000.0, 3.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 4.0], [5800.0, 1.0], [5700.0, 3.0], [5900.0, 4.0], [6100.0, 1.0], [6000.0, 1.0], [6600.0, 2.0], [6500.0, 2.0], [6400.0, 1.0], [6800.0, 1.0], [7300.0, 1.0], [8600.0, 1.0], [9000.0, 2.0], [9200.0, 1.0], [8900.0, 1.0], [9700.0, 1.0], [9600.0, 1.0], [10200.0, 1.0], [10000.0, 2.0], [10300.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [13300.0, 1.0], [13500.0, 1.0], [16300.0, 1.0], [19300.0, 1.0], [20700.0, 1.0], [23500.0, 1.0], [24400.0, 1.0], [27200.0, 1.0], [29600.0, 1.0], [31500.0, 1.0], [31800.0, 1.0], [35900.0, 1.0], [35300.0, 2.0], [40400.0, 1.0], [41600.0, 1.0], [200.0, 1050.0], [54700.0, 1.0], [54800.0, 1.0], [64000.0, 7.0], [300.0, 1172.0], [400.0, 491.0], [500.0, 424.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2716.0, "series": [{"data": [[0.0, 2716.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1645.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 822.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.87837837837838, "minX": 1.60386708E12, "maxY": 10.0, "series": [{"data": [[1.60386744E12, 10.0], [1.60386714E12, 10.0], [1.60386732E12, 10.0], [1.6038675E12, 10.0], [1.6038672E12, 10.0], [1.60386738E12, 10.0], [1.60386756E12, 9.87837837837838], [1.60386708E12, 10.0], [1.60386726E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386756E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 315.0, "minX": 1.0, "maxY": 31594.0, "series": [{"data": [[8.0, 370.0], [4.0, 2544.0], [2.0, 3730.0], [1.0, 5463.0], [9.0, 901.0], [10.0, 975.5296274850393], [5.0, 315.0], [6.0, 347.0], [3.0, 31594.0], [7.0, 1416.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 982.8321772639671]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2783.9, "minX": 1.60386708E12, "maxY": 4306224.266666667, "series": [{"data": [[1.60386744E12, 3835695.7666666666], [1.60386714E12, 2468819.6666666665], [1.60386732E12, 3112409.6], [1.6038675E12, 3351478.566666667], [1.6038672E12, 4306224.266666667], [1.60386738E12, 2320015.5], [1.60386756E12, 1967951.7], [1.60386708E12, 2662420.0], [1.60386726E12, 3512984.6666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386744E12, 5050.166666666667], [1.60386714E12, 4657.783333333334], [1.60386732E12, 3726.2166666666667], [1.6038675E12, 5122.233333333334], [1.6038672E12, 5129.766666666666], [1.60386738E12, 4027.0333333333333], [1.60386756E12, 2783.9], [1.60386708E12, 3135.2833333333333], [1.60386726E12, 4944.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386756E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 899.3461538461539, "minX": 1.60386708E12, "maxY": 1255.6270270270265, "series": [{"data": [[1.60386744E12, 988.4268833087147], [1.60386714E12, 979.347962382445], [1.60386732E12, 1109.0984251968505], [1.6038675E12, 912.1201780415432], [1.6038672E12, 899.3461538461539], [1.60386738E12, 957.965888689408], [1.60386756E12, 1255.6270270270265], [1.60386708E12, 937.3455377574363], [1.60386726E12, 938.7013782542116]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386756E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 897.008875739645, "minX": 1.60386708E12, "maxY": 1254.308108108108, "series": [{"data": [[1.60386744E12, 986.8847858197937], [1.60386714E12, 977.7836990595606], [1.60386732E12, 1107.2854330708667], [1.6038675E12, 910.651335311573], [1.6038672E12, 897.008875739645], [1.60386738E12, 957.0107719928185], [1.60386756E12, 1254.308108108108], [1.60386708E12, 935.1556064073228], [1.60386726E12, 937.2189892802448]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386756E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.010355029585798812, "minX": 1.60386708E12, "maxY": 0.24713958810068642, "series": [{"data": [[1.60386744E12, 0.01477104874446087], [1.60386714E12, 0.04545454545454545], [1.60386732E12, 0.017716535433070883], [1.6038675E12, 0.013353115727002962], [1.6038672E12, 0.010355029585798812], [1.60386738E12, 0.01256732495511668], [1.60386756E12, 0.013513513513513506], [1.60386708E12, 0.24713958810068642], [1.60386726E12, 0.010719754977029095]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386756E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 217.0, "minX": 1.60386708E12, "maxY": 54852.0, "series": [{"data": [[1.60386744E12, 27267.0], [1.60386714E12, 54733.0], [1.60386732E12, 10810.0], [1.6038675E12, 29691.0], [1.6038672E12, 35909.0], [1.60386738E12, 54852.0], [1.60386756E12, 31594.0], [1.60386708E12, 23585.0], [1.60386726E12, 40440.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386744E12, 231.08399983882904], [1.60386714E12, 226.0], [1.60386732E12, 234.0], [1.6038675E12, 232.0], [1.6038672E12, 226.0], [1.60386738E12, 234.0], [1.60386756E12, 230.65999982357025], [1.60386708E12, 227.88399979114533], [1.60386726E12, 225.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386744E12, 231.6924000644684], [1.60386714E12, 226.0], [1.60386732E12, 234.0584000968933], [1.6038675E12, 232.0], [1.6038672E12, 226.0], [1.60386738E12, 234.0], [1.60386756E12, 231.3260000705719], [1.60386708E12, 228.67240008354187], [1.60386726E12, 225.46470006227494]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386744E12, 231.42199991941453], [1.60386714E12, 226.0], [1.60386732E12, 234.0], [1.6038675E12, 232.0], [1.6038672E12, 226.0], [1.60386738E12, 234.0], [1.60386756E12, 231.02999991178513], [1.60386708E12, 228.32199989557267], [1.60386726E12, 225.20349992215634]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386744E12, 229.0], [1.60386714E12, 217.0], [1.60386732E12, 233.0], [1.6038675E12, 229.0], [1.6038672E12, 222.0], [1.60386738E12, 229.0], [1.60386756E12, 227.0], [1.60386708E12, 225.0], [1.60386726E12, 224.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386744E12, 378.0], [1.60386714E12, 450.5], [1.60386732E12, 591.0], [1.6038675E12, 411.0], [1.6038672E12, 353.0], [1.60386738E12, 550.0], [1.60386756E12, 573.0], [1.60386708E12, 623.0], [1.60386726E12, 392.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386756E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 241.0, "minX": 1.0, "maxY": 64066.0, "series": [{"data": [[2.0, 1701.5], [3.0, 1598.0], [4.0, 1278.0], [5.0, 816.0], [6.0, 799.0], [7.0, 707.0], [8.0, 665.5], [9.0, 594.0], [10.0, 553.0], [11.0, 516.0], [12.0, 412.0], [13.0, 466.0], [14.0, 501.0], [15.0, 393.0], [1.0, 1644.0], [16.0, 364.0], [17.0, 415.5], [18.0, 315.0], [19.0, 272.0], [20.0, 248.0], [21.0, 248.0], [22.0, 280.0], [23.0, 247.0], [24.0, 248.0], [25.0, 241.0], [26.0, 253.0], [27.0, 244.0], [28.0, 254.0], [29.0, 250.0], [30.0, 241.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 64064.0], [10.0, 64065.0], [11.0, 64065.0], [7.0, 64066.0], [14.0, 64066.0], [15.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 241.0, "minX": 1.0, "maxY": 64066.0, "series": [{"data": [[2.0, 1699.0], [3.0, 1596.0], [4.0, 1276.0], [5.0, 814.0], [6.0, 796.5], [7.0, 706.0], [8.0, 664.5], [9.0, 592.0], [10.0, 550.0], [11.0, 514.5], [12.0, 411.0], [13.0, 465.5], [14.0, 500.0], [15.0, 393.0], [1.0, 1640.0], [16.0, 363.5], [17.0, 415.5], [18.0, 315.0], [19.0, 272.0], [20.0, 248.0], [21.0, 248.0], [22.0, 279.5], [23.0, 247.0], [24.0, 248.0], [25.0, 241.0], [26.0, 253.0], [27.0, 244.0], [28.0, 254.0], [29.0, 250.0], [30.0, 241.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 64064.0], [10.0, 64065.0], [11.0, 64065.0], [7.0, 64066.0], [14.0, 64066.0], [15.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.60386708E12, "maxY": 11.283333333333333, "series": [{"data": [[1.60386744E12, 11.283333333333333], [1.60386714E12, 10.633333333333333], [1.60386732E12, 8.466666666666667], [1.6038675E12, 11.233333333333333], [1.6038672E12, 11.266666666666667], [1.60386738E12, 9.283333333333333], [1.60386756E12, 6.0], [1.60386708E12, 7.45], [1.60386726E12, 10.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386756E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60386708E12, "maxY": 11.25, "series": [{"data": [[1.60386744E12, 11.25], [1.60386714E12, 10.633333333333333], [1.60386732E12, 8.45], [1.6038675E12, 11.216666666666667], [1.6038672E12, 11.25], [1.60386738E12, 9.283333333333333], [1.60386756E12, 6.15], [1.60386708E12, 7.283333333333333], [1.60386726E12, 10.866666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60386744E12, 0.03333333333333333], [1.60386732E12, 0.016666666666666666], [1.6038675E12, 0.016666666666666666], [1.6038672E12, 0.016666666666666666], [1.60386756E12, 0.016666666666666666], [1.60386726E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386756E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60386708E12, "maxY": 11.25, "series": [{"data": [[1.60386744E12, 11.25], [1.60386714E12, 10.633333333333333], [1.60386732E12, 8.45], [1.6038675E12, 11.216666666666667], [1.6038672E12, 11.25], [1.60386738E12, 9.283333333333333], [1.60386756E12, 6.15], [1.60386708E12, 7.283333333333333], [1.60386726E12, 10.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60386744E12, 0.03333333333333333], [1.60386732E12, 0.016666666666666666], [1.6038675E12, 0.016666666666666666], [1.6038672E12, 0.016666666666666666], [1.60386756E12, 0.016666666666666666], [1.60386726E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386756E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60386708E12, "maxY": 11.25, "series": [{"data": [[1.60386744E12, 11.25], [1.60386714E12, 10.633333333333333], [1.60386732E12, 8.45], [1.6038675E12, 11.216666666666667], [1.6038672E12, 11.25], [1.60386738E12, 9.283333333333333], [1.60386756E12, 6.15], [1.60386708E12, 7.283333333333333], [1.60386726E12, 10.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60386744E12, 0.03333333333333333], [1.60386732E12, 0.016666666666666666], [1.6038675E12, 0.016666666666666666], [1.6038672E12, 0.016666666666666666], [1.60386756E12, 0.016666666666666666], [1.60386726E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386756E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

