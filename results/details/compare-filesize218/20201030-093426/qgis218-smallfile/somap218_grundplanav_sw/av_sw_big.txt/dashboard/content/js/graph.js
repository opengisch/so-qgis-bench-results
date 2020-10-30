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
        data: {"result": {"minY": 217.0, "minX": 0.0, "maxY": 64067.0, "series": [{"data": [[0.0, 217.0], [0.1, 225.0], [0.2, 226.0], [0.3, 227.0], [0.4, 229.0], [0.5, 229.0], [0.6, 230.0], [0.7, 231.0], [0.8, 231.0], [0.9, 231.0], [1.0, 232.0], [1.1, 232.0], [1.2, 232.0], [1.3, 233.0], [1.4, 233.0], [1.5, 233.0], [1.6, 234.0], [1.7, 234.0], [1.8, 234.0], [1.9, 234.0], [2.0, 235.0], [2.1, 235.0], [2.2, 235.0], [2.3, 235.0], [2.4, 236.0], [2.5, 236.0], [2.6, 236.0], [2.7, 237.0], [2.8, 237.0], [2.9, 237.0], [3.0, 237.0], [3.1, 237.0], [3.2, 238.0], [3.3, 238.0], [3.4, 238.0], [3.5, 238.0], [3.6, 238.0], [3.7, 239.0], [3.8, 239.0], [3.9, 239.0], [4.0, 240.0], [4.1, 240.0], [4.2, 240.0], [4.3, 240.0], [4.4, 240.0], [4.5, 241.0], [4.6, 241.0], [4.7, 241.0], [4.8, 241.0], [4.9, 242.0], [5.0, 242.0], [5.1, 242.0], [5.2, 242.0], [5.3, 242.0], [5.4, 243.0], [5.5, 243.0], [5.6, 243.0], [5.7, 243.0], [5.8, 243.0], [5.9, 243.0], [6.0, 243.0], [6.1, 244.0], [6.2, 244.0], [6.3, 244.0], [6.4, 244.0], [6.5, 244.0], [6.6, 245.0], [6.7, 245.0], [6.8, 245.0], [6.9, 245.0], [7.0, 246.0], [7.1, 246.0], [7.2, 246.0], [7.3, 246.0], [7.4, 246.0], [7.5, 247.0], [7.6, 247.0], [7.7, 247.0], [7.8, 248.0], [7.9, 248.0], [8.0, 248.0], [8.1, 249.0], [8.2, 249.0], [8.3, 250.0], [8.4, 250.0], [8.5, 250.0], [8.6, 250.0], [8.7, 251.0], [8.8, 251.0], [8.9, 251.0], [9.0, 251.0], [9.1, 252.0], [9.2, 252.0], [9.3, 252.0], [9.4, 253.0], [9.5, 253.0], [9.6, 254.0], [9.7, 254.0], [9.8, 254.0], [9.9, 255.0], [10.0, 255.0], [10.1, 255.0], [10.2, 256.0], [10.3, 257.0], [10.4, 257.0], [10.5, 257.0], [10.6, 258.0], [10.7, 258.0], [10.8, 259.0], [10.9, 259.0], [11.0, 259.0], [11.1, 260.0], [11.2, 260.0], [11.3, 260.0], [11.4, 261.0], [11.5, 261.0], [11.6, 262.0], [11.7, 262.0], [11.8, 263.0], [11.9, 263.0], [12.0, 264.0], [12.1, 265.0], [12.2, 266.0], [12.3, 266.0], [12.4, 266.0], [12.5, 267.0], [12.6, 267.0], [12.7, 268.0], [12.8, 269.0], [12.9, 269.0], [13.0, 270.0], [13.1, 270.0], [13.2, 271.0], [13.3, 271.0], [13.4, 272.0], [13.5, 272.0], [13.6, 273.0], [13.7, 274.0], [13.8, 275.0], [13.9, 276.0], [14.0, 276.0], [14.1, 277.0], [14.2, 277.0], [14.3, 278.0], [14.4, 278.0], [14.5, 279.0], [14.6, 279.0], [14.7, 280.0], [14.8, 280.0], [14.9, 281.0], [15.0, 281.0], [15.1, 282.0], [15.2, 282.0], [15.3, 283.0], [15.4, 283.0], [15.5, 284.0], [15.6, 284.0], [15.7, 284.0], [15.8, 285.0], [15.9, 286.0], [16.0, 287.0], [16.1, 288.0], [16.2, 288.0], [16.3, 288.0], [16.4, 289.0], [16.5, 290.0], [16.6, 290.0], [16.7, 291.0], [16.8, 292.0], [16.9, 293.0], [17.0, 293.0], [17.1, 295.0], [17.2, 295.0], [17.3, 296.0], [17.4, 297.0], [17.5, 298.0], [17.6, 299.0], [17.7, 300.0], [17.8, 300.0], [17.9, 301.0], [18.0, 301.0], [18.1, 302.0], [18.2, 302.0], [18.3, 302.0], [18.4, 303.0], [18.5, 303.0], [18.6, 304.0], [18.7, 304.0], [18.8, 304.0], [18.9, 305.0], [19.0, 305.0], [19.1, 305.0], [19.2, 305.0], [19.3, 306.0], [19.4, 306.0], [19.5, 306.0], [19.6, 307.0], [19.7, 307.0], [19.8, 307.0], [19.9, 308.0], [20.0, 308.0], [20.1, 309.0], [20.2, 309.0], [20.3, 309.0], [20.4, 309.0], [20.5, 310.0], [20.6, 310.0], [20.7, 310.0], [20.8, 310.0], [20.9, 311.0], [21.0, 311.0], [21.1, 311.0], [21.2, 311.0], [21.3, 312.0], [21.4, 312.0], [21.5, 312.0], [21.6, 313.0], [21.7, 313.0], [21.8, 314.0], [21.9, 314.0], [22.0, 314.0], [22.1, 314.0], [22.2, 315.0], [22.3, 316.0], [22.4, 316.0], [22.5, 316.0], [22.6, 317.0], [22.7, 317.0], [22.8, 317.0], [22.9, 318.0], [23.0, 318.0], [23.1, 318.0], [23.2, 319.0], [23.3, 319.0], [23.4, 319.0], [23.5, 320.0], [23.6, 320.0], [23.7, 320.0], [23.8, 321.0], [23.9, 321.0], [24.0, 321.0], [24.1, 321.0], [24.2, 322.0], [24.3, 322.0], [24.4, 322.0], [24.5, 322.0], [24.6, 323.0], [24.7, 323.0], [24.8, 323.0], [24.9, 323.0], [25.0, 324.0], [25.1, 324.0], [25.2, 325.0], [25.3, 325.0], [25.4, 325.0], [25.5, 325.0], [25.6, 326.0], [25.7, 326.0], [25.8, 327.0], [25.9, 327.0], [26.0, 328.0], [26.1, 328.0], [26.2, 328.0], [26.3, 329.0], [26.4, 329.0], [26.5, 329.0], [26.6, 329.0], [26.7, 330.0], [26.8, 330.0], [26.9, 331.0], [27.0, 331.0], [27.1, 332.0], [27.2, 332.0], [27.3, 332.0], [27.4, 333.0], [27.5, 333.0], [27.6, 334.0], [27.7, 334.0], [27.8, 334.0], [27.9, 335.0], [28.0, 335.0], [28.1, 336.0], [28.2, 336.0], [28.3, 337.0], [28.4, 337.0], [28.5, 337.0], [28.6, 337.0], [28.7, 338.0], [28.8, 338.0], [28.9, 339.0], [29.0, 340.0], [29.1, 340.0], [29.2, 340.0], [29.3, 341.0], [29.4, 341.0], [29.5, 342.0], [29.6, 342.0], [29.7, 343.0], [29.8, 344.0], [29.9, 344.0], [30.0, 344.0], [30.1, 345.0], [30.2, 345.0], [30.3, 346.0], [30.4, 347.0], [30.5, 347.0], [30.6, 348.0], [30.7, 349.0], [30.8, 349.0], [30.9, 350.0], [31.0, 350.0], [31.1, 350.0], [31.2, 351.0], [31.3, 352.0], [31.4, 353.0], [31.5, 354.0], [31.6, 354.0], [31.7, 355.0], [31.8, 355.0], [31.9, 356.0], [32.0, 356.0], [32.1, 356.0], [32.2, 357.0], [32.3, 358.0], [32.4, 359.0], [32.5, 359.0], [32.6, 360.0], [32.7, 361.0], [32.8, 361.0], [32.9, 362.0], [33.0, 362.0], [33.1, 363.0], [33.2, 364.0], [33.3, 364.0], [33.4, 364.0], [33.5, 365.0], [33.6, 365.0], [33.7, 366.0], [33.8, 366.0], [33.9, 366.0], [34.0, 367.0], [34.1, 367.0], [34.2, 368.0], [34.3, 369.0], [34.4, 370.0], [34.5, 371.0], [34.6, 371.0], [34.7, 372.0], [34.8, 373.0], [34.9, 373.0], [35.0, 374.0], [35.1, 374.0], [35.2, 375.0], [35.3, 375.0], [35.4, 376.0], [35.5, 376.0], [35.6, 377.0], [35.7, 377.0], [35.8, 378.0], [35.9, 378.0], [36.0, 379.0], [36.1, 379.0], [36.2, 380.0], [36.3, 381.0], [36.4, 381.0], [36.5, 382.0], [36.6, 383.0], [36.7, 383.0], [36.8, 383.0], [36.9, 384.0], [37.0, 384.0], [37.1, 385.0], [37.2, 385.0], [37.3, 386.0], [37.4, 387.0], [37.5, 388.0], [37.6, 388.0], [37.7, 389.0], [37.8, 389.0], [37.9, 389.0], [38.0, 390.0], [38.1, 390.0], [38.2, 391.0], [38.3, 391.0], [38.4, 392.0], [38.5, 393.0], [38.6, 393.0], [38.7, 394.0], [38.8, 395.0], [38.9, 395.0], [39.0, 396.0], [39.1, 396.0], [39.2, 397.0], [39.3, 398.0], [39.4, 398.0], [39.5, 399.0], [39.6, 400.0], [39.7, 401.0], [39.8, 401.0], [39.9, 402.0], [40.0, 403.0], [40.1, 404.0], [40.2, 404.0], [40.3, 405.0], [40.4, 405.0], [40.5, 406.0], [40.6, 407.0], [40.7, 407.0], [40.8, 408.0], [40.9, 410.0], [41.0, 410.0], [41.1, 411.0], [41.2, 411.0], [41.3, 412.0], [41.4, 413.0], [41.5, 414.0], [41.6, 414.0], [41.7, 416.0], [41.8, 416.0], [41.9, 418.0], [42.0, 418.0], [42.1, 419.0], [42.2, 419.0], [42.3, 420.0], [42.4, 421.0], [42.5, 422.0], [42.6, 423.0], [42.7, 424.0], [42.8, 425.0], [42.9, 426.0], [43.0, 427.0], [43.1, 427.0], [43.2, 430.0], [43.3, 430.0], [43.4, 431.0], [43.5, 432.0], [43.6, 432.0], [43.7, 434.0], [43.8, 434.0], [43.9, 436.0], [44.0, 437.0], [44.1, 437.0], [44.2, 438.0], [44.3, 439.0], [44.4, 440.0], [44.5, 441.0], [44.6, 442.0], [44.7, 443.0], [44.8, 443.0], [44.9, 444.0], [45.0, 445.0], [45.1, 446.0], [45.2, 446.0], [45.3, 447.0], [45.4, 449.0], [45.5, 450.0], [45.6, 450.0], [45.7, 451.0], [45.8, 452.0], [45.9, 454.0], [46.0, 454.0], [46.1, 456.0], [46.2, 457.0], [46.3, 458.0], [46.4, 459.0], [46.5, 461.0], [46.6, 462.0], [46.7, 463.0], [46.8, 464.0], [46.9, 465.0], [47.0, 466.0], [47.1, 468.0], [47.2, 470.0], [47.3, 471.0], [47.4, 472.0], [47.5, 472.0], [47.6, 474.0], [47.7, 475.0], [47.8, 476.0], [47.9, 477.0], [48.0, 479.0], [48.1, 480.0], [48.2, 481.0], [48.3, 482.0], [48.4, 482.0], [48.5, 483.0], [48.6, 484.0], [48.7, 485.0], [48.8, 487.0], [48.9, 488.0], [49.0, 490.0], [49.1, 490.0], [49.2, 492.0], [49.3, 494.0], [49.4, 495.0], [49.5, 496.0], [49.6, 499.0], [49.7, 500.0], [49.8, 501.0], [49.9, 502.0], [50.0, 503.0], [50.1, 504.0], [50.2, 505.0], [50.3, 507.0], [50.4, 508.0], [50.5, 509.0], [50.6, 510.0], [50.7, 512.0], [50.8, 513.0], [50.9, 514.0], [51.0, 515.0], [51.1, 516.0], [51.2, 517.0], [51.3, 519.0], [51.4, 520.0], [51.5, 522.0], [51.6, 524.0], [51.7, 525.0], [51.8, 526.0], [51.9, 529.0], [52.0, 530.0], [52.1, 531.0], [52.2, 532.0], [52.3, 534.0], [52.4, 535.0], [52.5, 537.0], [52.6, 539.0], [52.7, 540.0], [52.8, 542.0], [52.9, 544.0], [53.0, 545.0], [53.1, 545.0], [53.2, 547.0], [53.3, 550.0], [53.4, 551.0], [53.5, 552.0], [53.6, 553.0], [53.7, 555.0], [53.8, 556.0], [53.9, 556.0], [54.0, 559.0], [54.1, 561.0], [54.2, 562.0], [54.3, 562.0], [54.4, 563.0], [54.5, 563.0], [54.6, 565.0], [54.7, 566.0], [54.8, 567.0], [54.9, 567.0], [55.0, 568.0], [55.1, 570.0], [55.2, 571.0], [55.3, 573.0], [55.4, 574.0], [55.5, 576.0], [55.6, 577.0], [55.7, 578.0], [55.8, 580.0], [55.9, 581.0], [56.0, 582.0], [56.1, 584.0], [56.2, 584.0], [56.3, 585.0], [56.4, 587.0], [56.5, 588.0], [56.6, 589.0], [56.7, 590.0], [56.8, 591.0], [56.9, 593.0], [57.0, 595.0], [57.1, 596.0], [57.2, 597.0], [57.3, 598.0], [57.4, 600.0], [57.5, 601.0], [57.6, 603.0], [57.7, 604.0], [57.8, 604.0], [57.9, 606.0], [58.0, 607.0], [58.1, 610.0], [58.2, 610.0], [58.3, 611.0], [58.4, 614.0], [58.5, 615.0], [58.6, 617.0], [58.7, 619.0], [58.8, 620.0], [58.9, 621.0], [59.0, 624.0], [59.1, 626.0], [59.2, 628.0], [59.3, 629.0], [59.4, 630.0], [59.5, 631.0], [59.6, 631.0], [59.7, 633.0], [59.8, 635.0], [59.9, 636.0], [60.0, 637.0], [60.1, 638.0], [60.2, 640.0], [60.3, 640.0], [60.4, 643.0], [60.5, 644.0], [60.6, 646.0], [60.7, 647.0], [60.8, 648.0], [60.9, 649.0], [61.0, 649.0], [61.1, 652.0], [61.2, 653.0], [61.3, 655.0], [61.4, 656.0], [61.5, 658.0], [61.6, 659.0], [61.7, 660.0], [61.8, 661.0], [61.9, 662.0], [62.0, 663.0], [62.1, 665.0], [62.2, 666.0], [62.3, 667.0], [62.4, 668.0], [62.5, 670.0], [62.6, 672.0], [62.7, 673.0], [62.8, 675.0], [62.9, 677.0], [63.0, 678.0], [63.1, 679.0], [63.2, 681.0], [63.3, 682.0], [63.4, 684.0], [63.5, 685.0], [63.6, 687.0], [63.7, 689.0], [63.8, 691.0], [63.9, 693.0], [64.0, 694.0], [64.1, 695.0], [64.2, 697.0], [64.3, 698.0], [64.4, 699.0], [64.5, 701.0], [64.6, 702.0], [64.7, 703.0], [64.8, 705.0], [64.9, 706.0], [65.0, 708.0], [65.1, 709.0], [65.2, 710.0], [65.3, 713.0], [65.4, 713.0], [65.5, 715.0], [65.6, 716.0], [65.7, 718.0], [65.8, 721.0], [65.9, 722.0], [66.0, 724.0], [66.1, 726.0], [66.2, 728.0], [66.3, 731.0], [66.4, 732.0], [66.5, 734.0], [66.6, 735.0], [66.7, 736.0], [66.8, 737.0], [66.9, 739.0], [67.0, 740.0], [67.1, 742.0], [67.2, 745.0], [67.3, 747.0], [67.4, 748.0], [67.5, 750.0], [67.6, 752.0], [67.7, 754.0], [67.8, 756.0], [67.9, 758.0], [68.0, 762.0], [68.1, 764.0], [68.2, 765.0], [68.3, 766.0], [68.4, 767.0], [68.5, 770.0], [68.6, 773.0], [68.7, 774.0], [68.8, 775.0], [68.9, 777.0], [69.0, 780.0], [69.1, 781.0], [69.2, 782.0], [69.3, 784.0], [69.4, 787.0], [69.5, 790.0], [69.6, 792.0], [69.7, 794.0], [69.8, 796.0], [69.9, 799.0], [70.0, 801.0], [70.1, 803.0], [70.2, 805.0], [70.3, 809.0], [70.4, 811.0], [70.5, 813.0], [70.6, 817.0], [70.7, 820.0], [70.8, 821.0], [70.9, 824.0], [71.0, 825.0], [71.1, 828.0], [71.2, 832.0], [71.3, 833.0], [71.4, 839.0], [71.5, 842.0], [71.6, 848.0], [71.7, 851.0], [71.8, 853.0], [71.9, 854.0], [72.0, 855.0], [72.1, 857.0], [72.2, 859.0], [72.3, 863.0], [72.4, 864.0], [72.5, 866.0], [72.6, 869.0], [72.7, 871.0], [72.8, 874.0], [72.9, 875.0], [73.0, 877.0], [73.1, 879.0], [73.2, 882.0], [73.3, 884.0], [73.4, 887.0], [73.5, 888.0], [73.6, 893.0], [73.7, 897.0], [73.8, 900.0], [73.9, 902.0], [74.0, 906.0], [74.1, 908.0], [74.2, 912.0], [74.3, 919.0], [74.4, 921.0], [74.5, 922.0], [74.6, 924.0], [74.7, 926.0], [74.8, 931.0], [74.9, 935.0], [75.0, 937.0], [75.1, 938.0], [75.2, 941.0], [75.3, 944.0], [75.4, 948.0], [75.5, 952.0], [75.6, 956.0], [75.7, 960.0], [75.8, 963.0], [75.9, 970.0], [76.0, 974.0], [76.1, 981.0], [76.2, 983.0], [76.3, 987.0], [76.4, 992.0], [76.5, 995.0], [76.6, 1000.0], [76.7, 1008.0], [76.8, 1010.0], [76.9, 1013.0], [77.0, 1017.0], [77.1, 1022.0], [77.2, 1026.0], [77.3, 1032.0], [77.4, 1040.0], [77.5, 1043.0], [77.6, 1048.0], [77.7, 1054.0], [77.8, 1055.0], [77.9, 1063.0], [78.0, 1069.0], [78.1, 1074.0], [78.2, 1077.0], [78.3, 1083.0], [78.4, 1087.0], [78.5, 1090.0], [78.6, 1093.0], [78.7, 1102.0], [78.8, 1109.0], [78.9, 1111.0], [79.0, 1118.0], [79.1, 1123.0], [79.2, 1125.0], [79.3, 1127.0], [79.4, 1130.0], [79.5, 1135.0], [79.6, 1138.0], [79.7, 1143.0], [79.8, 1147.0], [79.9, 1157.0], [80.0, 1167.0], [80.1, 1175.0], [80.2, 1180.0], [80.3, 1187.0], [80.4, 1194.0], [80.5, 1201.0], [80.6, 1206.0], [80.7, 1218.0], [80.8, 1224.0], [80.9, 1233.0], [81.0, 1237.0], [81.1, 1247.0], [81.2, 1254.0], [81.3, 1260.0], [81.4, 1266.0], [81.5, 1274.0], [81.6, 1289.0], [81.7, 1300.0], [81.8, 1309.0], [81.9, 1318.0], [82.0, 1329.0], [82.1, 1336.0], [82.2, 1360.0], [82.3, 1376.0], [82.4, 1396.0], [82.5, 1399.0], [82.6, 1404.0], [82.7, 1415.0], [82.8, 1431.0], [82.9, 1444.0], [83.0, 1461.0], [83.1, 1468.0], [83.2, 1482.0], [83.3, 1490.0], [83.4, 1494.0], [83.5, 1500.0], [83.6, 1508.0], [83.7, 1535.0], [83.8, 1549.0], [83.9, 1564.0], [84.0, 1570.0], [84.1, 1589.0], [84.2, 1595.0], [84.3, 1609.0], [84.4, 1618.0], [84.5, 1621.0], [84.6, 1625.0], [84.7, 1631.0], [84.8, 1639.0], [84.9, 1648.0], [85.0, 1655.0], [85.1, 1656.0], [85.2, 1663.0], [85.3, 1667.0], [85.4, 1670.0], [85.5, 1676.0], [85.6, 1678.0], [85.7, 1681.0], [85.8, 1684.0], [85.9, 1686.0], [86.0, 1690.0], [86.1, 1693.0], [86.2, 1700.0], [86.3, 1704.0], [86.4, 1708.0], [86.5, 1711.0], [86.6, 1716.0], [86.7, 1720.0], [86.8, 1727.0], [86.9, 1732.0], [87.0, 1734.0], [87.1, 1736.0], [87.2, 1738.0], [87.3, 1744.0], [87.4, 1745.0], [87.5, 1748.0], [87.6, 1751.0], [87.7, 1755.0], [87.8, 1756.0], [87.9, 1759.0], [88.0, 1762.0], [88.1, 1763.0], [88.2, 1766.0], [88.3, 1768.0], [88.4, 1774.0], [88.5, 1777.0], [88.6, 1784.0], [88.7, 1787.0], [88.8, 1792.0], [88.9, 1794.0], [89.0, 1798.0], [89.1, 1804.0], [89.2, 1804.0], [89.3, 1808.0], [89.4, 1813.0], [89.5, 1820.0], [89.6, 1823.0], [89.7, 1829.0], [89.8, 1832.0], [89.9, 1840.0], [90.0, 1844.0], [90.1, 1848.0], [90.2, 1850.0], [90.3, 1852.0], [90.4, 1855.0], [90.5, 1858.0], [90.6, 1862.0], [90.7, 1866.0], [90.8, 1870.0], [90.9, 1876.0], [91.0, 1883.0], [91.1, 1895.0], [91.2, 1898.0], [91.3, 1904.0], [91.4, 1908.0], [91.5, 1915.0], [91.6, 1921.0], [91.7, 1937.0], [91.8, 1945.0], [91.9, 1950.0], [92.0, 1964.0], [92.1, 1971.0], [92.2, 1976.0], [92.3, 1978.0], [92.4, 1981.0], [92.5, 1992.0], [92.6, 2002.0], [92.7, 2013.0], [92.8, 2025.0], [92.9, 2033.0], [93.0, 2046.0], [93.1, 2052.0], [93.2, 2061.0], [93.3, 2068.0], [93.4, 2083.0], [93.5, 2090.0], [93.6, 2099.0], [93.7, 2120.0], [93.8, 2134.0], [93.9, 2138.0], [94.0, 2171.0], [94.1, 2178.0], [94.2, 2207.0], [94.3, 2217.0], [94.4, 2226.0], [94.5, 2233.0], [94.6, 2248.0], [94.7, 2270.0], [94.8, 2300.0], [94.9, 2381.0], [95.0, 2406.0], [95.1, 2420.0], [95.2, 2448.0], [95.3, 2468.0], [95.4, 2491.0], [95.5, 2527.0], [95.6, 2577.0], [95.7, 2609.0], [95.8, 2655.0], [95.9, 2689.0], [96.0, 2724.0], [96.1, 2756.0], [96.2, 2768.0], [96.3, 2874.0], [96.4, 2958.0], [96.5, 3014.0], [96.6, 3057.0], [96.7, 3104.0], [96.8, 3170.0], [96.9, 3277.0], [97.0, 3321.0], [97.1, 3361.0], [97.2, 3468.0], [97.3, 3531.0], [97.4, 3626.0], [97.5, 3695.0], [97.6, 3735.0], [97.7, 3798.0], [97.8, 3864.0], [97.9, 3987.0], [98.0, 4037.0], [98.1, 4133.0], [98.2, 4181.0], [98.3, 4244.0], [98.4, 4366.0], [98.5, 4748.0], [98.6, 4919.0], [98.7, 5142.0], [98.8, 5433.0], [98.9, 5820.0], [99.0, 6029.0], [99.1, 6431.0], [99.2, 7008.0], [99.3, 9874.0], [99.4, 11126.0], [99.5, 13828.0], [99.6, 25566.0], [99.7, 34654.0], [99.8, 46776.0], [99.9, 58361.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1137.0, "series": [{"data": [[33500.0, 1.0], [40500.0, 1.0], [39300.0, 1.0], [42500.0, 1.0], [44700.0, 1.0], [46700.0, 1.0], [200.0, 918.0], [52100.0, 1.0], [58300.0, 1.0], [59900.0, 1.0], [300.0, 1137.0], [400.0, 523.0], [500.0, 400.0], [600.0, 366.0], [700.0, 287.0], [800.0, 199.0], [900.0, 144.0], [1000.0, 108.0], [1100.0, 92.0], [1200.0, 66.0], [1300.0, 42.0], [1400.0, 51.0], [1500.0, 39.0], [1600.0, 101.0], [1700.0, 147.0], [1800.0, 114.0], [1900.0, 70.0], [2000.0, 54.0], [2100.0, 29.0], [2300.0, 9.0], [2200.0, 33.0], [2400.0, 24.0], [2500.0, 12.0], [2600.0, 15.0], [2700.0, 13.0], [2800.0, 7.0], [2900.0, 8.0], [3000.0, 10.0], [3100.0, 8.0], [3300.0, 9.0], [3200.0, 6.0], [3400.0, 6.0], [3500.0, 5.0], [3700.0, 10.0], [3600.0, 9.0], [3800.0, 6.0], [3900.0, 6.0], [4000.0, 8.0], [4300.0, 3.0], [4200.0, 6.0], [4100.0, 7.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 3.0], [5100.0, 3.0], [4900.0, 4.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [5800.0, 3.0], [6000.0, 3.0], [6100.0, 1.0], [5900.0, 2.0], [6200.0, 1.0], [6500.0, 1.0], [6400.0, 3.0], [6900.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [7600.0, 1.0], [8900.0, 1.0], [9300.0, 1.0], [10000.0, 1.0], [9800.0, 2.0], [10200.0, 1.0], [10500.0, 2.0], [11200.0, 2.0], [11100.0, 1.0], [12800.0, 2.0], [13600.0, 1.0], [13800.0, 1.0], [15700.0, 1.0], [15600.0, 1.0], [17900.0, 1.0], [23400.0, 1.0], [25500.0, 1.0], [28600.0, 1.0], [29100.0, 1.0], [32400.0, 1.0], [34600.0, 1.0], [49000.0, 1.0], [52800.0, 1.0], [55400.0, 1.0], [64000.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2581.0, "series": [{"data": [[0.0, 2581.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1753.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 852.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.86725663716814, "minX": 1.60405074E12, "maxY": 10.0, "series": [{"data": [[1.6040508E12, 10.0], [1.60405128E12, 9.86725663716814], [1.60405098E12, 10.0], [1.60405116E12, 10.0], [1.60405086E12, 10.0], [1.60405074E12, 10.0], [1.60405104E12, 10.0], [1.60405122E12, 10.0], [1.60405092E12, 10.0], [1.6040511E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 309.0, "minX": 1.0, "maxY": 58361.0, "series": [{"data": [[8.0, 1539.0], [4.0, 448.0], [2.0, 29192.0], [1.0, 5832.0], [9.0, 510.0], [10.0, 1022.2931866435057], [5.0, 2425.0], [6.0, 309.0], [3.0, 58361.0], [7.0, 661.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 1039.64894026975]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 932.7166666666667, "minX": 1.60405074E12, "maxY": 3791804.4, "series": [{"data": [[1.6040508E12, 2743524.25], [1.60405128E12, 1872003.6833333333], [1.60405098E12, 3188752.55], [1.60405116E12, 3791804.4], [1.60405086E12, 3005455.966666667], [1.60405074E12, 1036871.3666666667], [1.60405104E12, 3018870.3666666667], [1.60405122E12, 3162940.966666667], [1.60405092E12, 3579709.25], [1.6040511E12, 2165421.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040508E12, 3839.3], [1.60405128E12, 2551.5], [1.60405098E12, 4405.666666666667], [1.60405116E12, 4724.333333333333], [1.60405086E12, 4574.45], [1.60405074E12, 932.7166666666667], [1.60405104E12, 3601.7833333333333], [1.60405122E12, 5036.116666666667], [1.60405092E12, 4860.4], [1.6040511E12, 4051.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 899.5179407176281, "minX": 1.60405074E12, "maxY": 1426.4100294985249, "series": [{"data": [[1.6040508E12, 1103.923220973781], [1.60405128E12, 1426.4100294985249], [1.60405098E12, 1061.8681506849318], [1.60405116E12, 991.0788643533139], [1.60405086E12, 955.2951612903229], [1.60405074E12, 1188.3759999999997], [1.60405104E12, 1094.8350100603611], [1.60405122E12, 906.2458521870282], [1.60405092E12, 899.5179407176281], [1.6040511E12, 1106.437613019891]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 896.9204368174725, "minX": 1.60405074E12, "maxY": 1424.9085545722705, "series": [{"data": [[1.6040508E12, 1101.9232209737836], [1.60405128E12, 1424.9085545722705], [1.60405098E12, 1059.9794520547944], [1.60405116E12, 989.3359621451099], [1.60405086E12, 953.1080645161288], [1.60405074E12, 1185.6559999999997], [1.60405104E12, 1093.3822937625741], [1.60405122E12, 905.0799396681746], [1.60405092E12, 896.9204368174725], [1.6040511E12, 1105.5497287522612]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.011986301369863015, "minX": 1.60405074E12, "maxY": 0.7439999999999999, "series": [{"data": [[1.6040508E12, 0.026217228464419463], [1.60405128E12, 0.014749262536873175], [1.60405098E12, 0.011986301369863015], [1.60405116E12, 0.01261829652996845], [1.60405086E12, 0.012903225806451618], [1.60405074E12, 0.7439999999999999], [1.60405104E12, 0.014084507042253521], [1.60405122E12, 0.013574660633484163], [1.60405092E12, 0.015600624024961013], [1.6040511E12, 0.014466546112115744]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 217.0, "minX": 1.60405074E12, "maxY": 59947.0, "series": [{"data": [[1.6040508E12, 34654.0], [1.60405128E12, 58361.0], [1.60405098E12, 59947.0], [1.60405116E12, 55463.0], [1.60405086E12, 42525.0], [1.60405074E12, 15710.0], [1.60405104E12, 46776.0], [1.60405122E12, 32427.0], [1.60405092E12, 40576.0], [1.6040511E12, 13828.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040508E12, 225.81499987244607], [1.60405128E12, 237.23999967575074], [1.60405098E12, 230.26499986052514], [1.60405116E12, 234.0], [1.60405086E12, 230.0], [1.60405074E12, 248.34999924898148], [1.60405104E12, 238.0], [1.60405122E12, 234.0], [1.60405092E12, 226.77799984693527], [1.6040511E12, 236.96799986839295]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040508E12, 226.59300010204316], [1.60405128E12, 238.4640001296997], [1.60405098E12, 230.79150005578995], [1.60405116E12, 234.28650006055832], [1.60405086E12, 230.13800005912782], [1.60405074E12, 251.1850003004074], [1.60405104E12, 238.0], [1.60405122E12, 234.0], [1.60405092E12, 227.0], [1.6040511E12, 237.92960010528566]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040508E12, 226.16499987244606], [1.60405128E12, 237.91999983787537], [1.60405098E12, 230.55749993026257], [1.60405116E12, 234.0324999243021], [1.60405086E12, 230.0], [1.60405074E12, 249.92499962449074], [1.60405104E12, 238.0], [1.60405122E12, 234.0], [1.60405092E12, 227.0], [1.6040511E12, 237.48799986839293]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040508E12, 217.0], [1.60405128E12, 233.0], [1.60405098E12, 224.0], [1.60405116E12, 229.0], [1.60405086E12, 224.0], [1.60405074E12, 245.0], [1.60405104E12, 234.0], [1.60405122E12, 230.0], [1.60405092E12, 225.0], [1.6040511E12, 234.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040508E12, 603.5], [1.60405128E12, 653.0], [1.60405098E12, 446.5], [1.60405116E12, 410.5], [1.60405086E12, 392.0], [1.60405074E12, 655.0], [1.60405104E12, 649.0], [1.60405122E12, 413.5], [1.60405092E12, 417.0], [1.6040511E12, 553.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 237.0, "minX": 1.0, "maxY": 64067.0, "series": [{"data": [[2.0, 1658.0], [3.0, 1123.0], [4.0, 1035.0], [5.0, 804.0], [6.0, 865.0], [7.0, 701.0], [8.0, 581.0], [9.0, 649.0], [10.0, 556.0], [11.0, 565.5], [12.0, 501.0], [13.0, 479.0], [14.0, 424.0], [15.0, 429.0], [16.0, 348.5], [1.0, 5099.0], [17.0, 316.0], [18.0, 328.0], [19.0, 283.0], [20.0, 237.0], [21.0, 259.0], [22.0, 279.0], [23.0, 277.0], [24.0, 260.0], [25.0, 266.0], [26.0, 285.0], [27.0, 267.0], [28.0, 245.5], [29.0, 248.0], [30.0, 247.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 64065.0], [3.0, 64067.0], [13.0, 64067.0], [14.0, 64066.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 237.0, "minX": 1.0, "maxY": 64067.0, "series": [{"data": [[2.0, 1653.0], [3.0, 1117.0], [4.0, 1031.0], [5.0, 803.0], [6.0, 863.0], [7.0, 699.0], [8.0, 581.0], [9.0, 648.0], [10.0, 556.0], [11.0, 565.0], [12.0, 501.0], [13.0, 479.0], [14.0, 424.0], [15.0, 429.0], [16.0, 348.5], [1.0, 5093.5], [17.0, 315.5], [18.0, 327.5], [19.0, 283.0], [20.0, 237.0], [21.0, 259.0], [22.0, 279.0], [23.0, 277.0], [24.0, 260.0], [25.0, 266.0], [26.0, 285.0], [27.0, 267.0], [28.0, 245.5], [29.0, 248.0], [30.0, 247.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 64064.0], [3.0, 64067.0], [13.0, 64067.0], [14.0, 64066.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.60405074E12, "maxY": 11.05, "series": [{"data": [[1.6040508E12, 8.9], [1.60405128E12, 5.483333333333333], [1.60405098E12, 9.733333333333333], [1.60405116E12, 10.566666666666666], [1.60405086E12, 10.333333333333334], [1.60405074E12, 2.25], [1.60405104E12, 8.283333333333333], [1.60405122E12, 11.05], [1.60405092E12, 10.683333333333334], [1.6040511E12, 9.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60405074E12, "maxY": 11.033333333333333, "series": [{"data": [[1.6040508E12, 8.9], [1.60405128E12, 5.65], [1.60405098E12, 9.733333333333333], [1.60405116E12, 10.566666666666666], [1.60405086E12, 10.316666666666666], [1.60405074E12, 2.0833333333333335], [1.60405104E12, 8.283333333333333], [1.60405122E12, 11.033333333333333], [1.60405092E12, 10.683333333333334], [1.6040511E12, 9.183333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60405086E12, 0.016666666666666666], [1.60405122E12, 0.016666666666666666], [1.6040511E12, 0.03333333333333333]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60405074E12, "maxY": 11.033333333333333, "series": [{"data": [[1.6040508E12, 8.9], [1.60405128E12, 5.65], [1.60405098E12, 9.733333333333333], [1.60405116E12, 10.566666666666666], [1.60405086E12, 10.316666666666666], [1.60405074E12, 2.0833333333333335], [1.60405104E12, 8.283333333333333], [1.60405122E12, 11.033333333333333], [1.60405092E12, 10.683333333333334], [1.6040511E12, 9.183333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60405086E12, 0.016666666666666666], [1.60405122E12, 0.016666666666666666], [1.6040511E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60405074E12, "maxY": 11.033333333333333, "series": [{"data": [[1.6040508E12, 8.9], [1.60405128E12, 5.65], [1.60405098E12, 9.733333333333333], [1.60405116E12, 10.566666666666666], [1.60405086E12, 10.316666666666666], [1.60405074E12, 2.0833333333333335], [1.60405104E12, 8.283333333333333], [1.60405122E12, 11.033333333333333], [1.60405092E12, 10.683333333333334], [1.6040511E12, 9.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60405086E12, 0.016666666666666666], [1.60405122E12, 0.016666666666666666], [1.6040511E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405128E12, "title": "Total Transactions Per Second"}},
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

