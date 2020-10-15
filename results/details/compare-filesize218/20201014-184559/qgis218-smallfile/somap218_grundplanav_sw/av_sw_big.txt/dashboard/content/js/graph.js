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
        data: {"result": {"minY": 220.0, "minX": 0.0, "maxY": 64068.0, "series": [{"data": [[0.0, 220.0], [0.1, 222.0], [0.2, 223.0], [0.3, 223.0], [0.4, 224.0], [0.5, 225.0], [0.6, 226.0], [0.7, 226.0], [0.8, 226.0], [0.9, 226.0], [1.0, 226.0], [1.1, 227.0], [1.2, 227.0], [1.3, 227.0], [1.4, 227.0], [1.5, 228.0], [1.6, 228.0], [1.7, 228.0], [1.8, 228.0], [1.9, 229.0], [2.0, 229.0], [2.1, 229.0], [2.2, 229.0], [2.3, 229.0], [2.4, 229.0], [2.5, 229.0], [2.6, 230.0], [2.7, 230.0], [2.8, 230.0], [2.9, 230.0], [3.0, 230.0], [3.1, 230.0], [3.2, 231.0], [3.3, 231.0], [3.4, 231.0], [3.5, 231.0], [3.6, 231.0], [3.7, 231.0], [3.8, 232.0], [3.9, 232.0], [4.0, 232.0], [4.1, 232.0], [4.2, 232.0], [4.3, 233.0], [4.4, 233.0], [4.5, 233.0], [4.6, 233.0], [4.7, 233.0], [4.8, 233.0], [4.9, 233.0], [5.0, 233.0], [5.1, 234.0], [5.2, 234.0], [5.3, 234.0], [5.4, 234.0], [5.5, 234.0], [5.6, 235.0], [5.7, 235.0], [5.8, 235.0], [5.9, 235.0], [6.0, 235.0], [6.1, 235.0], [6.2, 235.0], [6.3, 236.0], [6.4, 236.0], [6.5, 236.0], [6.6, 236.0], [6.7, 236.0], [6.8, 237.0], [6.9, 237.0], [7.0, 237.0], [7.1, 238.0], [7.2, 238.0], [7.3, 238.0], [7.4, 238.0], [7.5, 238.0], [7.6, 238.0], [7.7, 239.0], [7.8, 239.0], [7.9, 239.0], [8.0, 239.0], [8.1, 239.0], [8.2, 239.0], [8.3, 240.0], [8.4, 240.0], [8.5, 240.0], [8.6, 240.0], [8.7, 240.0], [8.8, 241.0], [8.9, 241.0], [9.0, 241.0], [9.1, 241.0], [9.2, 242.0], [9.3, 242.0], [9.4, 242.0], [9.5, 242.0], [9.6, 242.0], [9.7, 243.0], [9.8, 243.0], [9.9, 243.0], [10.0, 244.0], [10.1, 244.0], [10.2, 244.0], [10.3, 244.0], [10.4, 244.0], [10.5, 245.0], [10.6, 245.0], [10.7, 245.0], [10.8, 245.0], [10.9, 246.0], [11.0, 246.0], [11.1, 246.0], [11.2, 246.0], [11.3, 246.0], [11.4, 247.0], [11.5, 247.0], [11.6, 247.0], [11.7, 247.0], [11.8, 248.0], [11.9, 248.0], [12.0, 249.0], [12.1, 249.0], [12.2, 249.0], [12.3, 250.0], [12.4, 250.0], [12.5, 251.0], [12.6, 251.0], [12.7, 251.0], [12.8, 251.0], [12.9, 252.0], [13.0, 252.0], [13.1, 252.0], [13.2, 253.0], [13.3, 253.0], [13.4, 253.0], [13.5, 254.0], [13.6, 254.0], [13.7, 254.0], [13.8, 254.0], [13.9, 255.0], [14.0, 255.0], [14.1, 256.0], [14.2, 257.0], [14.3, 257.0], [14.4, 257.0], [14.5, 257.0], [14.6, 258.0], [14.7, 258.0], [14.8, 259.0], [14.9, 260.0], [15.0, 260.0], [15.1, 260.0], [15.2, 261.0], [15.3, 262.0], [15.4, 262.0], [15.5, 262.0], [15.6, 263.0], [15.7, 264.0], [15.8, 265.0], [15.9, 266.0], [16.0, 266.0], [16.1, 267.0], [16.2, 267.0], [16.3, 268.0], [16.4, 269.0], [16.5, 270.0], [16.6, 271.0], [16.7, 271.0], [16.8, 272.0], [16.9, 272.0], [17.0, 275.0], [17.1, 276.0], [17.2, 277.0], [17.3, 278.0], [17.4, 278.0], [17.5, 279.0], [17.6, 280.0], [17.7, 281.0], [17.8, 281.0], [17.9, 283.0], [18.0, 284.0], [18.1, 286.0], [18.2, 286.0], [18.3, 287.0], [18.4, 287.0], [18.5, 288.0], [18.6, 288.0], [18.7, 289.0], [18.8, 290.0], [18.9, 290.0], [19.0, 291.0], [19.1, 292.0], [19.2, 293.0], [19.3, 294.0], [19.4, 294.0], [19.5, 295.0], [19.6, 296.0], [19.7, 296.0], [19.8, 296.0], [19.9, 296.0], [20.0, 297.0], [20.1, 297.0], [20.2, 298.0], [20.3, 298.0], [20.4, 298.0], [20.5, 299.0], [20.6, 299.0], [20.7, 299.0], [20.8, 299.0], [20.9, 299.0], [21.0, 299.0], [21.1, 300.0], [21.2, 300.0], [21.3, 300.0], [21.4, 301.0], [21.5, 301.0], [21.6, 301.0], [21.7, 301.0], [21.8, 301.0], [21.9, 302.0], [22.0, 302.0], [22.1, 302.0], [22.2, 302.0], [22.3, 302.0], [22.4, 303.0], [22.5, 303.0], [22.6, 303.0], [22.7, 304.0], [22.8, 304.0], [22.9, 304.0], [23.0, 304.0], [23.1, 304.0], [23.2, 304.0], [23.3, 305.0], [23.4, 305.0], [23.5, 305.0], [23.6, 305.0], [23.7, 306.0], [23.8, 306.0], [23.9, 306.0], [24.0, 307.0], [24.1, 307.0], [24.2, 307.0], [24.3, 307.0], [24.4, 308.0], [24.5, 308.0], [24.6, 308.0], [24.7, 308.0], [24.8, 309.0], [24.9, 309.0], [25.0, 309.0], [25.1, 309.0], [25.2, 310.0], [25.3, 310.0], [25.4, 310.0], [25.5, 310.0], [25.6, 311.0], [25.7, 311.0], [25.8, 311.0], [25.9, 311.0], [26.0, 312.0], [26.1, 312.0], [26.2, 312.0], [26.3, 313.0], [26.4, 313.0], [26.5, 313.0], [26.6, 314.0], [26.7, 314.0], [26.8, 314.0], [26.9, 314.0], [27.0, 315.0], [27.1, 315.0], [27.2, 315.0], [27.3, 315.0], [27.4, 316.0], [27.5, 316.0], [27.6, 316.0], [27.7, 316.0], [27.8, 317.0], [27.9, 317.0], [28.0, 317.0], [28.1, 318.0], [28.2, 319.0], [28.3, 319.0], [28.4, 319.0], [28.5, 320.0], [28.6, 320.0], [28.7, 321.0], [28.8, 321.0], [28.9, 321.0], [29.0, 321.0], [29.1, 322.0], [29.2, 322.0], [29.3, 322.0], [29.4, 323.0], [29.5, 323.0], [29.6, 324.0], [29.7, 324.0], [29.8, 324.0], [29.9, 324.0], [30.0, 324.0], [30.1, 325.0], [30.2, 325.0], [30.3, 325.0], [30.4, 325.0], [30.5, 326.0], [30.6, 326.0], [30.7, 327.0], [30.8, 327.0], [30.9, 327.0], [31.0, 328.0], [31.1, 328.0], [31.2, 329.0], [31.3, 330.0], [31.4, 331.0], [31.5, 331.0], [31.6, 331.0], [31.7, 332.0], [31.8, 333.0], [31.9, 333.0], [32.0, 334.0], [32.1, 334.0], [32.2, 334.0], [32.3, 335.0], [32.4, 335.0], [32.5, 336.0], [32.6, 336.0], [32.7, 336.0], [32.8, 337.0], [32.9, 337.0], [33.0, 338.0], [33.1, 338.0], [33.2, 339.0], [33.3, 339.0], [33.4, 340.0], [33.5, 340.0], [33.6, 341.0], [33.7, 342.0], [33.8, 342.0], [33.9, 342.0], [34.0, 343.0], [34.1, 343.0], [34.2, 343.0], [34.3, 344.0], [34.4, 345.0], [34.5, 346.0], [34.6, 347.0], [34.7, 347.0], [34.8, 347.0], [34.9, 348.0], [35.0, 349.0], [35.1, 349.0], [35.2, 350.0], [35.3, 350.0], [35.4, 351.0], [35.5, 351.0], [35.6, 352.0], [35.7, 352.0], [35.8, 352.0], [35.9, 353.0], [36.0, 353.0], [36.1, 354.0], [36.2, 355.0], [36.3, 355.0], [36.4, 355.0], [36.5, 356.0], [36.6, 356.0], [36.7, 357.0], [36.8, 357.0], [36.9, 358.0], [37.0, 359.0], [37.1, 359.0], [37.2, 360.0], [37.3, 360.0], [37.4, 361.0], [37.5, 361.0], [37.6, 362.0], [37.7, 362.0], [37.8, 362.0], [37.9, 362.0], [38.0, 363.0], [38.1, 363.0], [38.2, 363.0], [38.3, 364.0], [38.4, 364.0], [38.5, 365.0], [38.6, 365.0], [38.7, 365.0], [38.8, 365.0], [38.9, 366.0], [39.0, 367.0], [39.1, 367.0], [39.2, 368.0], [39.3, 368.0], [39.4, 368.0], [39.5, 369.0], [39.6, 370.0], [39.7, 370.0], [39.8, 371.0], [39.9, 372.0], [40.0, 372.0], [40.1, 372.0], [40.2, 373.0], [40.3, 373.0], [40.4, 374.0], [40.5, 375.0], [40.6, 376.0], [40.7, 376.0], [40.8, 376.0], [40.9, 377.0], [41.0, 377.0], [41.1, 378.0], [41.2, 378.0], [41.3, 380.0], [41.4, 380.0], [41.5, 380.0], [41.6, 382.0], [41.7, 382.0], [41.8, 383.0], [41.9, 384.0], [42.0, 385.0], [42.1, 385.0], [42.2, 386.0], [42.3, 386.0], [42.4, 387.0], [42.5, 388.0], [42.6, 388.0], [42.7, 390.0], [42.8, 390.0], [42.9, 391.0], [43.0, 391.0], [43.1, 392.0], [43.2, 393.0], [43.3, 394.0], [43.4, 394.0], [43.5, 394.0], [43.6, 395.0], [43.7, 396.0], [43.8, 397.0], [43.9, 398.0], [44.0, 400.0], [44.1, 402.0], [44.2, 403.0], [44.3, 404.0], [44.4, 405.0], [44.5, 406.0], [44.6, 406.0], [44.7, 407.0], [44.8, 410.0], [44.9, 411.0], [45.0, 411.0], [45.1, 414.0], [45.2, 415.0], [45.3, 416.0], [45.4, 416.0], [45.5, 418.0], [45.6, 418.0], [45.7, 419.0], [45.8, 421.0], [45.9, 422.0], [46.0, 423.0], [46.1, 425.0], [46.2, 426.0], [46.3, 427.0], [46.4, 429.0], [46.5, 429.0], [46.6, 430.0], [46.7, 431.0], [46.8, 432.0], [46.9, 434.0], [47.0, 434.0], [47.1, 435.0], [47.2, 437.0], [47.3, 437.0], [47.4, 439.0], [47.5, 439.0], [47.6, 440.0], [47.7, 440.0], [47.8, 441.0], [47.9, 443.0], [48.0, 444.0], [48.1, 445.0], [48.2, 446.0], [48.3, 447.0], [48.4, 448.0], [48.5, 449.0], [48.6, 451.0], [48.7, 453.0], [48.8, 454.0], [48.9, 454.0], [49.0, 456.0], [49.1, 457.0], [49.2, 458.0], [49.3, 459.0], [49.4, 460.0], [49.5, 461.0], [49.6, 462.0], [49.7, 462.0], [49.8, 463.0], [49.9, 464.0], [50.0, 465.0], [50.1, 466.0], [50.2, 467.0], [50.3, 468.0], [50.4, 469.0], [50.5, 470.0], [50.6, 474.0], [50.7, 475.0], [50.8, 476.0], [50.9, 477.0], [51.0, 478.0], [51.1, 480.0], [51.2, 481.0], [51.3, 482.0], [51.4, 483.0], [51.5, 484.0], [51.6, 485.0], [51.7, 486.0], [51.8, 488.0], [51.9, 489.0], [52.0, 490.0], [52.1, 491.0], [52.2, 492.0], [52.3, 494.0], [52.4, 496.0], [52.5, 497.0], [52.6, 499.0], [52.7, 500.0], [52.8, 501.0], [52.9, 502.0], [53.0, 503.0], [53.1, 504.0], [53.2, 505.0], [53.3, 506.0], [53.4, 507.0], [53.5, 509.0], [53.6, 511.0], [53.7, 513.0], [53.8, 514.0], [53.9, 515.0], [54.0, 516.0], [54.1, 517.0], [54.2, 518.0], [54.3, 519.0], [54.4, 520.0], [54.5, 520.0], [54.6, 522.0], [54.7, 523.0], [54.8, 524.0], [54.9, 525.0], [55.0, 525.0], [55.1, 526.0], [55.2, 527.0], [55.3, 528.0], [55.4, 529.0], [55.5, 530.0], [55.6, 531.0], [55.7, 532.0], [55.8, 533.0], [55.9, 533.0], [56.0, 534.0], [56.1, 535.0], [56.2, 536.0], [56.3, 536.0], [56.4, 537.0], [56.5, 538.0], [56.6, 539.0], [56.7, 540.0], [56.8, 541.0], [56.9, 543.0], [57.0, 546.0], [57.1, 547.0], [57.2, 549.0], [57.3, 549.0], [57.4, 551.0], [57.5, 554.0], [57.6, 554.0], [57.7, 557.0], [57.8, 558.0], [57.9, 559.0], [58.0, 562.0], [58.1, 564.0], [58.2, 565.0], [58.3, 566.0], [58.4, 566.0], [58.5, 567.0], [58.6, 569.0], [58.7, 570.0], [58.8, 572.0], [58.9, 573.0], [59.0, 576.0], [59.1, 577.0], [59.2, 580.0], [59.3, 582.0], [59.4, 583.0], [59.5, 585.0], [59.6, 586.0], [59.7, 587.0], [59.8, 589.0], [59.9, 592.0], [60.0, 593.0], [60.1, 596.0], [60.2, 596.0], [60.3, 597.0], [60.4, 599.0], [60.5, 600.0], [60.6, 601.0], [60.7, 602.0], [60.8, 603.0], [60.9, 605.0], [61.0, 606.0], [61.1, 609.0], [61.2, 611.0], [61.3, 612.0], [61.4, 613.0], [61.5, 614.0], [61.6, 615.0], [61.7, 617.0], [61.8, 619.0], [61.9, 620.0], [62.0, 620.0], [62.1, 622.0], [62.2, 623.0], [62.3, 623.0], [62.4, 624.0], [62.5, 625.0], [62.6, 627.0], [62.7, 628.0], [62.8, 630.0], [62.9, 631.0], [63.0, 634.0], [63.1, 635.0], [63.2, 635.0], [63.3, 637.0], [63.4, 637.0], [63.5, 638.0], [63.6, 640.0], [63.7, 641.0], [63.8, 642.0], [63.9, 643.0], [64.0, 644.0], [64.1, 646.0], [64.2, 648.0], [64.3, 650.0], [64.4, 652.0], [64.5, 653.0], [64.6, 654.0], [64.7, 655.0], [64.8, 656.0], [64.9, 657.0], [65.0, 659.0], [65.1, 660.0], [65.2, 661.0], [65.3, 664.0], [65.4, 664.0], [65.5, 666.0], [65.6, 667.0], [65.7, 670.0], [65.8, 671.0], [65.9, 672.0], [66.0, 673.0], [66.1, 675.0], [66.2, 676.0], [66.3, 676.0], [66.4, 678.0], [66.5, 680.0], [66.6, 681.0], [66.7, 683.0], [66.8, 684.0], [66.9, 686.0], [67.0, 686.0], [67.1, 689.0], [67.2, 691.0], [67.3, 692.0], [67.4, 694.0], [67.5, 696.0], [67.6, 697.0], [67.7, 699.0], [67.8, 702.0], [67.9, 704.0], [68.0, 707.0], [68.1, 710.0], [68.2, 711.0], [68.3, 712.0], [68.4, 714.0], [68.5, 717.0], [68.6, 719.0], [68.7, 722.0], [68.8, 724.0], [68.9, 726.0], [69.0, 727.0], [69.1, 731.0], [69.2, 732.0], [69.3, 733.0], [69.4, 735.0], [69.5, 738.0], [69.6, 738.0], [69.7, 739.0], [69.8, 741.0], [69.9, 744.0], [70.0, 748.0], [70.1, 749.0], [70.2, 751.0], [70.3, 754.0], [70.4, 756.0], [70.5, 758.0], [70.6, 759.0], [70.7, 760.0], [70.8, 764.0], [70.9, 766.0], [71.0, 767.0], [71.1, 769.0], [71.2, 771.0], [71.3, 772.0], [71.4, 775.0], [71.5, 777.0], [71.6, 779.0], [71.7, 780.0], [71.8, 782.0], [71.9, 783.0], [72.0, 784.0], [72.1, 785.0], [72.2, 788.0], [72.3, 790.0], [72.4, 793.0], [72.5, 794.0], [72.6, 797.0], [72.7, 799.0], [72.8, 802.0], [72.9, 804.0], [73.0, 806.0], [73.1, 809.0], [73.2, 813.0], [73.3, 814.0], [73.4, 816.0], [73.5, 818.0], [73.6, 820.0], [73.7, 823.0], [73.8, 825.0], [73.9, 826.0], [74.0, 831.0], [74.1, 834.0], [74.2, 840.0], [74.3, 843.0], [74.4, 848.0], [74.5, 852.0], [74.6, 858.0], [74.7, 862.0], [74.8, 865.0], [74.9, 868.0], [75.0, 872.0], [75.1, 876.0], [75.2, 878.0], [75.3, 887.0], [75.4, 889.0], [75.5, 893.0], [75.6, 896.0], [75.7, 899.0], [75.8, 907.0], [75.9, 913.0], [76.0, 915.0], [76.1, 917.0], [76.2, 919.0], [76.3, 921.0], [76.4, 928.0], [76.5, 930.0], [76.6, 935.0], [76.7, 938.0], [76.8, 940.0], [76.9, 947.0], [77.0, 952.0], [77.1, 953.0], [77.2, 956.0], [77.3, 960.0], [77.4, 966.0], [77.5, 973.0], [77.6, 976.0], [77.7, 981.0], [77.8, 983.0], [77.9, 990.0], [78.0, 993.0], [78.1, 999.0], [78.2, 1003.0], [78.3, 1008.0], [78.4, 1010.0], [78.5, 1023.0], [78.6, 1030.0], [78.7, 1034.0], [78.8, 1043.0], [78.9, 1046.0], [79.0, 1050.0], [79.1, 1054.0], [79.2, 1059.0], [79.3, 1063.0], [79.4, 1069.0], [79.5, 1075.0], [79.6, 1079.0], [79.7, 1085.0], [79.8, 1090.0], [79.9, 1101.0], [80.0, 1105.0], [80.1, 1112.0], [80.2, 1118.0], [80.3, 1123.0], [80.4, 1128.0], [80.5, 1134.0], [80.6, 1138.0], [80.7, 1142.0], [80.8, 1147.0], [80.9, 1154.0], [81.0, 1158.0], [81.1, 1168.0], [81.2, 1175.0], [81.3, 1183.0], [81.4, 1192.0], [81.5, 1203.0], [81.6, 1210.0], [81.7, 1220.0], [81.8, 1228.0], [81.9, 1233.0], [82.0, 1247.0], [82.1, 1261.0], [82.2, 1280.0], [82.3, 1286.0], [82.4, 1301.0], [82.5, 1308.0], [82.6, 1316.0], [82.7, 1329.0], [82.8, 1355.0], [82.9, 1362.0], [83.0, 1369.0], [83.1, 1386.0], [83.2, 1402.0], [83.3, 1415.0], [83.4, 1421.0], [83.5, 1429.0], [83.6, 1434.0], [83.7, 1443.0], [83.8, 1472.0], [83.9, 1489.0], [84.0, 1501.0], [84.1, 1509.0], [84.2, 1518.0], [84.3, 1534.0], [84.4, 1545.0], [84.5, 1556.0], [84.6, 1564.0], [84.7, 1578.0], [84.8, 1588.0], [84.9, 1596.0], [85.0, 1600.0], [85.1, 1603.0], [85.2, 1606.0], [85.3, 1612.0], [85.4, 1615.0], [85.5, 1619.0], [85.6, 1622.0], [85.7, 1623.0], [85.8, 1629.0], [85.9, 1631.0], [86.0, 1635.0], [86.1, 1638.0], [86.2, 1643.0], [86.3, 1645.0], [86.4, 1648.0], [86.5, 1649.0], [86.6, 1651.0], [86.7, 1656.0], [86.8, 1660.0], [86.9, 1665.0], [87.0, 1667.0], [87.1, 1668.0], [87.2, 1670.0], [87.3, 1677.0], [87.4, 1681.0], [87.5, 1683.0], [87.6, 1684.0], [87.7, 1685.0], [87.8, 1686.0], [87.9, 1691.0], [88.0, 1695.0], [88.1, 1698.0], [88.2, 1700.0], [88.3, 1704.0], [88.4, 1707.0], [88.5, 1711.0], [88.6, 1713.0], [88.7, 1717.0], [88.8, 1719.0], [88.9, 1721.0], [89.0, 1726.0], [89.1, 1728.0], [89.2, 1731.0], [89.3, 1734.0], [89.4, 1736.0], [89.5, 1739.0], [89.6, 1742.0], [89.7, 1745.0], [89.8, 1747.0], [89.9, 1750.0], [90.0, 1752.0], [90.1, 1754.0], [90.2, 1756.0], [90.3, 1757.0], [90.4, 1762.0], [90.5, 1764.0], [90.6, 1769.0], [90.7, 1775.0], [90.8, 1779.0], [90.9, 1780.0], [91.0, 1784.0], [91.1, 1788.0], [91.2, 1792.0], [91.3, 1797.0], [91.4, 1800.0], [91.5, 1806.0], [91.6, 1810.0], [91.7, 1816.0], [91.8, 1822.0], [91.9, 1827.0], [92.0, 1831.0], [92.1, 1835.0], [92.2, 1839.0], [92.3, 1844.0], [92.4, 1849.0], [92.5, 1855.0], [92.6, 1861.0], [92.7, 1875.0], [92.8, 1885.0], [92.9, 1888.0], [93.0, 1896.0], [93.1, 1909.0], [93.2, 1916.0], [93.3, 1927.0], [93.4, 1938.0], [93.5, 1954.0], [93.6, 1964.0], [93.7, 1988.0], [93.8, 2004.0], [93.9, 2034.0], [94.0, 2040.0], [94.1, 2047.0], [94.2, 2063.0], [94.3, 2097.0], [94.4, 2116.0], [94.5, 2136.0], [94.6, 2170.0], [94.7, 2193.0], [94.8, 2225.0], [94.9, 2250.0], [95.0, 2269.0], [95.1, 2299.0], [95.2, 2322.0], [95.3, 2376.0], [95.4, 2414.0], [95.5, 2433.0], [95.6, 2457.0], [95.7, 2496.0], [95.8, 2526.0], [95.9, 2575.0], [96.0, 2628.0], [96.1, 2653.0], [96.2, 2705.0], [96.3, 2729.0], [96.4, 2764.0], [96.5, 2886.0], [96.6, 2950.0], [96.7, 3038.0], [96.8, 3077.0], [96.9, 3095.0], [97.0, 3106.0], [97.1, 3149.0], [97.2, 3286.0], [97.3, 3339.0], [97.4, 3408.0], [97.5, 3489.0], [97.6, 3603.0], [97.7, 3699.0], [97.8, 3745.0], [97.9, 3790.0], [98.0, 3873.0], [98.1, 3931.0], [98.2, 3979.0], [98.3, 4135.0], [98.4, 4324.0], [98.5, 4650.0], [98.6, 4822.0], [98.7, 4994.0], [98.8, 5285.0], [98.9, 5624.0], [99.0, 6066.0], [99.1, 6556.0], [99.2, 7271.0], [99.3, 8812.0], [99.4, 10035.0], [99.5, 11332.0], [99.6, 16331.0], [99.7, 27277.0], [99.8, 47665.0], [99.9, 55646.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1187.0, "series": [{"data": [[33500.0, 1.0], [32900.0, 1.0], [200.0, 1095.0], [54700.0, 1.0], [54900.0, 1.0], [53300.0, 1.0], [300.0, 1187.0], [400.0, 450.0], [500.0, 404.0], [600.0, 378.0], [700.0, 260.0], [800.0, 155.0], [900.0, 125.0], [1000.0, 92.0], [1100.0, 81.0], [1200.0, 49.0], [1300.0, 41.0], [1400.0, 42.0], [1500.0, 52.0], [1600.0, 163.0], [1700.0, 169.0], [1800.0, 86.0], [1900.0, 39.0], [2000.0, 27.0], [2100.0, 20.0], [2200.0, 21.0], [2300.0, 13.0], [2400.0, 19.0], [2500.0, 13.0], [2600.0, 11.0], [2700.0, 12.0], [2800.0, 6.0], [2900.0, 7.0], [3000.0, 15.0], [3100.0, 10.0], [3200.0, 5.0], [3300.0, 7.0], [3400.0, 7.0], [3500.0, 4.0], [3700.0, 12.0], [3600.0, 6.0], [3800.0, 6.0], [3900.0, 8.0], [4000.0, 3.0], [4200.0, 3.0], [4300.0, 3.0], [4100.0, 2.0], [4600.0, 2.0], [4500.0, 2.0], [4400.0, 1.0], [4700.0, 4.0], [4800.0, 4.0], [4900.0, 2.0], [5000.0, 2.0], [5100.0, 2.0], [5200.0, 1.0], [5300.0, 2.0], [5600.0, 3.0], [5400.0, 2.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6000.0, 1.0], [6100.0, 2.0], [6200.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7200.0, 2.0], [7800.0, 1.0], [8500.0, 1.0], [8600.0, 1.0], [8700.0, 1.0], [9100.0, 1.0], [8800.0, 1.0], [9700.0, 2.0], [9600.0, 1.0], [10200.0, 1.0], [10100.0, 1.0], [10000.0, 1.0], [10300.0, 1.0], [10500.0, 1.0], [10400.0, 1.0], [11300.0, 1.0], [11900.0, 1.0], [12800.0, 1.0], [14300.0, 1.0], [16000.0, 1.0], [16300.0, 2.0], [20500.0, 1.0], [22800.0, 1.0], [24800.0, 1.0], [27200.0, 1.0], [36600.0, 1.0], [35400.0, 1.0], [47600.0, 1.0], [53800.0, 1.0], [55600.0, 1.0], [62400.0, 1.0], [64000.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2739.0, "series": [{"data": [[0.0, 2739.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1620.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 827.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.833948339483394, "minX": 1.60270236E12, "maxY": 10.0, "series": [{"data": [[1.60270254E12, 10.0], [1.60270236E12, 10.0], [1.60270284E12, 9.833948339483394], [1.60270266E12, 10.0], [1.60270248E12, 10.0], [1.60270278E12, 10.0], [1.6027026E12, 10.0], [1.60270242E12, 10.0], [1.60270272E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270284E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 345.0, "minX": 1.0, "maxY": 62476.0, "series": [{"data": [[8.0, 2424.0], [4.0, 345.0], [2.0, 62476.0], [1.0, 5417.0], [9.0, 566.0], [10.0, 951.0038602586374], [5.0, 1063.0], [6.0, 348.0], [3.0, 53350.0], [7.0, 1437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991329479768785, 973.906936416185]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2041.4166666666667, "minX": 1.60270236E12, "maxY": 4295046.65, "series": [{"data": [[1.60270254E12, 3395594.566666667], [1.60270236E12, 2880161.9166666665], [1.60270284E12, 1668785.3666666667], [1.60270266E12, 2379547.25], [1.60270248E12, 4295046.65], [1.60270278E12, 3292508.2666666666], [1.6027026E12, 3220229.0833333335], [1.60270242E12, 2503921.7333333334], [1.60270272E12, 3937791.816666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60270254E12, 4865.4], [1.60270236E12, 3404.6666666666665], [1.60270284E12, 2041.4166666666667], [1.60270266E12, 4250.416666666667], [1.60270248E12, 5080.416666666667], [1.60270278E12, 5436.766666666666], [1.6027026E12, 3825.65], [1.60270242E12, 4703.066666666667], [1.60270272E12, 4969.533333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270284E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 841.2105997210601, "minX": 1.60270236E12, "maxY": 1521.431734317342, "series": [{"data": [[1.60270254E12, 901.1959564541211], [1.60270236E12, 1028.6751054852323], [1.60270284E12, 1521.431734317342], [1.60270266E12, 959.3883161512027], [1.60270248E12, 866.7656716417908], [1.60270278E12, 841.2105997210601], [1.6027026E12, 1252.1638095238088], [1.60270242E12, 905.5950155763239], [1.60270272E12, 892.1696696696698]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270284E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 840.2677824267777, "minX": 1.60270236E12, "maxY": 1519.9594095940965, "series": [{"data": [[1.60270254E12, 899.292379471228], [1.60270236E12, 1026.8312236286927], [1.60270284E12, 1519.9594095940965], [1.60270266E12, 958.5378006872857], [1.60270248E12, 864.5149253731347], [1.60270278E12, 840.2677824267777], [1.6027026E12, 1250.6723809523799], [1.60270242E12, 904.213395638629], [1.60270272E12, 890.9339339339341]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270284E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008368200836820081, "minX": 1.60270236E12, "maxY": 0.17721518987341792, "series": [{"data": [[1.60270254E12, 0.012441679626749629], [1.60270236E12, 0.17721518987341792], [1.60270284E12, 0.018450184501845022], [1.60270266E12, 0.010309278350515476], [1.60270248E12, 0.014925373134328361], [1.60270278E12, 0.008368200836820081], [1.6027026E12, 0.013333333333333322], [1.60270242E12, 0.04361370716510905], [1.60270272E12, 0.012012012012012007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270284E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 220.0, "minX": 1.60270236E12, "maxY": 62476.0, "series": [{"data": [[1.60270254E12, 53896.0], [1.60270236E12, 24835.0], [1.60270284E12, 62476.0], [1.60270266E12, 12899.0], [1.60270248E12, 16383.0], [1.60270278E12, 35487.0], [1.6027026E12, 54745.0], [1.60270242E12, 55646.0], [1.60270272E12, 54961.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60270254E12, 224.79599984645844], [1.60270236E12, 223.54999977350235], [1.60270284E12, 239.0319994163513], [1.60270266E12, 227.95199944496156], [1.60270248E12, 224.0], [1.60270278E12, 229.0], [1.6027026E12, 233.72499987483025], [1.60270242E12, 226.0], [1.60270272E12, 229.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60270254E12, 225.37560006141663], [1.60270236E12, 224.40500009059906], [1.60270284E12, 241.23520023345947], [1.60270266E12, 230.0472002220154], [1.60270248E12, 224.0], [1.60270278E12, 229.09830006837845], [1.6027026E12, 234.1975000500679], [1.60270242E12, 226.0], [1.60270272E12, 229.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60270254E12, 225.1179999232292], [1.60270236E12, 224.02499988675117], [1.60270284E12, 240.25599970817566], [1.60270266E12, 229.11599972248078], [1.60270248E12, 224.0], [1.60270278E12, 229.0], [1.6027026E12, 233.98749993741512], [1.60270242E12, 226.0], [1.60270272E12, 229.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60270254E12, 221.0], [1.60270236E12, 221.0], [1.60270284E12, 234.0], [1.60270266E12, 222.0], [1.60270248E12, 220.0], [1.60270278E12, 225.0], [1.6027026E12, 229.0], [1.60270242E12, 222.0], [1.60270272E12, 227.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60270254E12, 393.0], [1.60270236E12, 594.0], [1.60270284E12, 738.0], [1.60270266E12, 505.0], [1.60270248E12, 358.0], [1.60270278E12, 371.0], [1.6027026E12, 601.5], [1.60270242E12, 445.0], [1.60270272E12, 379.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270284E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 64068.0, "series": [{"data": [[2.0, 1204.5], [32.0, 239.5], [3.0, 1566.5], [4.0, 1089.5], [5.0, 888.5], [6.0, 785.5], [7.0, 803.0], [8.0, 562.0], [9.0, 578.5], [10.0, 534.0], [11.0, 517.0], [12.0, 509.0], [13.0, 505.0], [14.0, 418.5], [15.0, 355.0], [16.0, 367.0], [1.0, 4378.0], [17.0, 312.0], [18.0, 292.5], [19.0, 258.5], [20.0, 270.0], [21.0, 241.5], [22.0, 259.0], [23.0, 261.5], [24.0, 259.5], [26.0, 249.0], [27.0, 259.0], [29.0, 234.0], [30.0, 241.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 64065.0], [19.0, 64068.0], [22.0, 64064.0], [12.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 64068.0, "series": [{"data": [[2.0, 1203.0], [32.0, 239.5], [3.0, 1561.5], [4.0, 1088.0], [5.0, 887.0], [6.0, 783.5], [7.0, 800.0], [8.0, 561.0], [9.0, 577.5], [10.0, 532.0], [11.0, 516.0], [12.0, 508.0], [13.0, 504.5], [14.0, 418.0], [15.0, 354.0], [16.0, 366.5], [1.0, 4372.5], [17.0, 312.0], [18.0, 292.5], [19.0, 258.5], [20.0, 269.5], [21.0, 241.5], [22.0, 259.0], [23.0, 261.0], [24.0, 259.5], [26.0, 249.0], [27.0, 259.0], [29.0, 234.0], [30.0, 241.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 64064.0], [19.0, 64068.0], [22.0, 64064.0], [12.0, 64064.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.60270236E12, "maxY": 11.95, "series": [{"data": [[1.60270254E12, 10.716666666666667], [1.60270236E12, 8.066666666666666], [1.60270284E12, 4.35], [1.60270266E12, 9.7], [1.60270248E12, 11.166666666666666], [1.60270278E12, 11.95], [1.6027026E12, 8.75], [1.60270242E12, 10.7], [1.60270272E12, 11.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270284E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270236E12, "maxY": 11.933333333333334, "series": [{"data": [[1.60270254E12, 10.716666666666667], [1.60270236E12, 7.9], [1.60270284E12, 4.516666666666667], [1.60270266E12, 9.683333333333334], [1.60270248E12, 11.15], [1.60270278E12, 11.933333333333334], [1.6027026E12, 8.733333333333333], [1.60270242E12, 10.7], [1.60270272E12, 11.1]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60270266E12, 0.016666666666666666], [1.60270248E12, 0.016666666666666666], [1.60270278E12, 0.016666666666666666], [1.6027026E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60270284E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270236E12, "maxY": 11.933333333333334, "series": [{"data": [[1.60270254E12, 10.716666666666667], [1.60270236E12, 7.9], [1.60270284E12, 4.516666666666667], [1.60270266E12, 9.683333333333334], [1.60270248E12, 11.15], [1.60270278E12, 11.933333333333334], [1.6027026E12, 8.733333333333333], [1.60270242E12, 10.7], [1.60270272E12, 11.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60270266E12, 0.016666666666666666], [1.60270248E12, 0.016666666666666666], [1.60270278E12, 0.016666666666666666], [1.6027026E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270284E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60270236E12, "maxY": 11.933333333333334, "series": [{"data": [[1.60270254E12, 10.716666666666667], [1.60270236E12, 7.9], [1.60270284E12, 4.516666666666667], [1.60270266E12, 9.683333333333334], [1.60270248E12, 11.15], [1.60270278E12, 11.933333333333334], [1.6027026E12, 8.733333333333333], [1.60270242E12, 10.7], [1.60270272E12, 11.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60270266E12, 0.016666666666666666], [1.60270248E12, 0.016666666666666666], [1.60270278E12, 0.016666666666666666], [1.6027026E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60270284E12, "title": "Total Transactions Per Second"}},
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

