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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 3274.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 184.0], [0.3, 185.0], [0.4, 185.0], [0.5, 187.0], [0.6, 188.0], [0.7, 190.0], [0.8, 190.0], [0.9, 191.0], [1.0, 191.0], [1.1, 191.0], [1.2, 191.0], [1.3, 193.0], [1.4, 193.0], [1.5, 194.0], [1.6, 194.0], [1.7, 194.0], [1.8, 194.0], [1.9, 194.0], [2.0, 194.0], [2.1, 194.0], [2.2, 195.0], [2.3, 195.0], [2.4, 196.0], [2.5, 197.0], [2.6, 197.0], [2.7, 197.0], [2.8, 197.0], [2.9, 198.0], [3.0, 199.0], [3.1, 199.0], [3.2, 203.0], [3.3, 203.0], [3.4, 203.0], [3.5, 204.0], [3.6, 206.0], [3.7, 207.0], [3.8, 207.0], [3.9, 207.0], [4.0, 208.0], [4.1, 208.0], [4.2, 208.0], [4.3, 208.0], [4.4, 209.0], [4.5, 209.0], [4.6, 209.0], [4.7, 211.0], [4.8, 212.0], [4.9, 212.0], [5.0, 212.0], [5.1, 213.0], [5.2, 214.0], [5.3, 214.0], [5.4, 215.0], [5.5, 216.0], [5.6, 216.0], [5.7, 216.0], [5.8, 216.0], [5.9, 218.0], [6.0, 218.0], [6.1, 218.0], [6.2, 218.0], [6.3, 220.0], [6.4, 222.0], [6.5, 222.0], [6.6, 222.0], [6.7, 224.0], [6.8, 224.0], [6.9, 227.0], [7.0, 227.0], [7.1, 237.0], [7.2, 237.0], [7.3, 240.0], [7.4, 240.0], [7.5, 245.0], [7.6, 245.0], [7.7, 254.0], [7.8, 276.0], [7.9, 280.0], [8.0, 280.0], [8.1, 282.0], [8.2, 286.0], [8.3, 288.0], [8.4, 288.0], [8.5, 294.0], [8.6, 295.0], [8.7, 295.0], [8.8, 296.0], [8.9, 297.0], [9.0, 297.0], [9.1, 297.0], [9.2, 298.0], [9.3, 298.0], [9.4, 298.0], [9.5, 298.0], [9.6, 299.0], [9.7, 302.0], [9.8, 303.0], [9.9, 303.0], [10.0, 306.0], [10.1, 306.0], [10.2, 306.0], [10.3, 307.0], [10.4, 307.0], [10.5, 308.0], [10.6, 308.0], [10.7, 308.0], [10.8, 309.0], [10.9, 309.0], [11.0, 309.0], [11.1, 309.0], [11.2, 310.0], [11.3, 310.0], [11.4, 310.0], [11.5, 310.0], [11.6, 312.0], [11.7, 312.0], [11.8, 312.0], [11.9, 312.0], [12.0, 312.0], [12.1, 312.0], [12.2, 313.0], [12.3, 313.0], [12.4, 314.0], [12.5, 314.0], [12.6, 314.0], [12.7, 315.0], [12.8, 315.0], [12.9, 315.0], [13.0, 315.0], [13.1, 316.0], [13.2, 316.0], [13.3, 316.0], [13.4, 317.0], [13.5, 318.0], [13.6, 318.0], [13.7, 318.0], [13.8, 318.0], [13.9, 319.0], [14.0, 319.0], [14.1, 319.0], [14.2, 321.0], [14.3, 321.0], [14.4, 321.0], [14.5, 321.0], [14.6, 322.0], [14.7, 322.0], [14.8, 322.0], [14.9, 322.0], [15.0, 323.0], [15.1, 323.0], [15.2, 323.0], [15.3, 325.0], [15.4, 326.0], [15.5, 326.0], [15.6, 327.0], [15.7, 327.0], [15.8, 328.0], [15.9, 328.0], [16.0, 328.0], [16.1, 328.0], [16.2, 331.0], [16.3, 331.0], [16.4, 331.0], [16.5, 332.0], [16.6, 332.0], [16.7, 332.0], [16.8, 332.0], [16.9, 334.0], [17.0, 334.0], [17.1, 337.0], [17.2, 338.0], [17.3, 338.0], [17.4, 338.0], [17.5, 338.0], [17.6, 342.0], [17.7, 344.0], [17.8, 344.0], [17.9, 345.0], [18.0, 346.0], [18.1, 346.0], [18.2, 346.0], [18.3, 347.0], [18.4, 347.0], [18.5, 347.0], [18.6, 347.0], [18.7, 348.0], [18.8, 348.0], [18.9, 348.0], [19.0, 350.0], [19.1, 351.0], [19.2, 355.0], [19.3, 355.0], [19.4, 359.0], [19.5, 359.0], [19.6, 362.0], [19.7, 362.0], [19.8, 364.0], [19.9, 364.0], [20.0, 365.0], [20.1, 365.0], [20.2, 371.0], [20.3, 371.0], [20.4, 371.0], [20.5, 373.0], [20.6, 376.0], [20.7, 377.0], [20.8, 377.0], [20.9, 380.0], [21.0, 381.0], [21.1, 409.0], [21.2, 409.0], [21.3, 418.0], [21.4, 419.0], [21.5, 421.0], [21.6, 421.0], [21.7, 421.0], [21.8, 422.0], [21.9, 422.0], [22.0, 424.0], [22.1, 425.0], [22.2, 427.0], [22.3, 427.0], [22.4, 428.0], [22.5, 431.0], [22.6, 431.0], [22.7, 431.0], [22.8, 431.0], [22.9, 431.0], [23.0, 431.0], [23.1, 431.0], [23.2, 431.0], [23.3, 432.0], [23.4, 432.0], [23.5, 433.0], [23.6, 433.0], [23.7, 434.0], [23.8, 434.0], [23.9, 434.0], [24.0, 434.0], [24.1, 435.0], [24.2, 435.0], [24.3, 436.0], [24.4, 436.0], [24.5, 437.0], [24.6, 437.0], [24.7, 439.0], [24.8, 440.0], [24.9, 440.0], [25.0, 440.0], [25.1, 443.0], [25.2, 443.0], [25.3, 443.0], [25.4, 443.0], [25.5, 446.0], [25.6, 447.0], [25.7, 447.0], [25.8, 448.0], [25.9, 448.0], [26.0, 449.0], [26.1, 449.0], [26.2, 449.0], [26.3, 451.0], [26.4, 451.0], [26.5, 451.0], [26.6, 453.0], [26.7, 455.0], [26.8, 455.0], [26.9, 456.0], [27.0, 456.0], [27.1, 456.0], [27.2, 456.0], [27.3, 457.0], [27.4, 457.0], [27.5, 458.0], [27.6, 458.0], [27.7, 458.0], [27.8, 458.0], [27.9, 461.0], [28.0, 461.0], [28.1, 461.0], [28.2, 461.0], [28.3, 461.0], [28.4, 461.0], [28.5, 462.0], [28.6, 466.0], [28.7, 466.0], [28.8, 467.0], [28.9, 470.0], [29.0, 470.0], [29.1, 470.0], [29.2, 474.0], [29.3, 485.0], [29.4, 486.0], [29.5, 486.0], [29.6, 489.0], [29.7, 490.0], [29.8, 490.0], [29.9, 490.0], [30.0, 507.0], [30.1, 511.0], [30.2, 511.0], [30.3, 512.0], [30.4, 513.0], [30.5, 524.0], [30.6, 524.0], [30.7, 526.0], [30.8, 529.0], [30.9, 532.0], [31.0, 532.0], [31.1, 536.0], [31.2, 538.0], [31.3, 540.0], [31.4, 540.0], [31.5, 541.0], [31.6, 543.0], [31.7, 543.0], [31.8, 543.0], [31.9, 543.0], [32.0, 547.0], [32.1, 547.0], [32.2, 548.0], [32.3, 550.0], [32.4, 551.0], [32.5, 551.0], [32.6, 554.0], [32.7, 555.0], [32.8, 556.0], [32.9, 556.0], [33.0, 557.0], [33.1, 557.0], [33.2, 558.0], [33.3, 558.0], [33.4, 559.0], [33.5, 560.0], [33.6, 560.0], [33.7, 561.0], [33.8, 562.0], [33.9, 563.0], [34.0, 563.0], [34.1, 564.0], [34.2, 564.0], [34.3, 567.0], [34.4, 567.0], [34.5, 567.0], [34.6, 569.0], [34.7, 572.0], [34.8, 572.0], [34.9, 573.0], [35.0, 580.0], [35.1, 580.0], [35.2, 585.0], [35.3, 588.0], [35.4, 604.0], [35.5, 604.0], [35.6, 607.0], [35.7, 611.0], [35.8, 641.0], [35.9, 641.0], [36.0, 647.0], [36.1, 654.0], [36.2, 654.0], [36.3, 654.0], [36.4, 656.0], [36.5, 657.0], [36.6, 659.0], [36.7, 659.0], [36.8, 660.0], [36.9, 660.0], [37.0, 660.0], [37.1, 660.0], [37.2, 661.0], [37.3, 662.0], [37.4, 662.0], [37.5, 662.0], [37.6, 664.0], [37.7, 665.0], [37.8, 665.0], [37.9, 665.0], [38.0, 666.0], [38.1, 666.0], [38.2, 666.0], [38.3, 667.0], [38.4, 668.0], [38.5, 668.0], [38.6, 668.0], [38.7, 668.0], [38.8, 670.0], [38.9, 670.0], [39.0, 671.0], [39.1, 672.0], [39.2, 673.0], [39.3, 673.0], [39.4, 673.0], [39.5, 673.0], [39.6, 674.0], [39.7, 674.0], [39.8, 674.0], [39.9, 675.0], [40.0, 675.0], [40.1, 675.0], [40.2, 676.0], [40.3, 677.0], [40.4, 677.0], [40.5, 677.0], [40.6, 678.0], [40.7, 679.0], [40.8, 679.0], [40.9, 679.0], [41.0, 679.0], [41.1, 679.0], [41.2, 679.0], [41.3, 679.0], [41.4, 680.0], [41.5, 680.0], [41.6, 680.0], [41.7, 680.0], [41.8, 681.0], [41.9, 681.0], [42.0, 681.0], [42.1, 682.0], [42.2, 682.0], [42.3, 682.0], [42.4, 682.0], [42.5, 682.0], [42.6, 683.0], [42.7, 683.0], [42.8, 684.0], [42.9, 684.0], [43.0, 685.0], [43.1, 685.0], [43.2, 685.0], [43.3, 685.0], [43.4, 685.0], [43.5, 685.0], [43.6, 685.0], [43.7, 688.0], [43.8, 688.0], [43.9, 688.0], [44.0, 688.0], [44.1, 688.0], [44.2, 688.0], [44.3, 688.0], [44.4, 689.0], [44.5, 689.0], [44.6, 689.0], [44.7, 690.0], [44.8, 690.0], [44.9, 690.0], [45.0, 690.0], [45.1, 691.0], [45.2, 691.0], [45.3, 691.0], [45.4, 691.0], [45.5, 691.0], [45.6, 692.0], [45.7, 692.0], [45.8, 692.0], [45.9, 692.0], [46.0, 692.0], [46.1, 692.0], [46.2, 693.0], [46.3, 693.0], [46.4, 693.0], [46.5, 693.0], [46.6, 693.0], [46.7, 694.0], [46.8, 694.0], [46.9, 695.0], [47.0, 695.0], [47.1, 695.0], [47.2, 695.0], [47.3, 696.0], [47.4, 696.0], [47.5, 696.0], [47.6, 696.0], [47.7, 698.0], [47.8, 698.0], [47.9, 698.0], [48.0, 698.0], [48.1, 699.0], [48.2, 699.0], [48.3, 700.0], [48.4, 700.0], [48.5, 700.0], [48.6, 700.0], [48.7, 700.0], [48.8, 701.0], [48.9, 701.0], [49.0, 701.0], [49.1, 701.0], [49.2, 701.0], [49.3, 701.0], [49.4, 701.0], [49.5, 701.0], [49.6, 701.0], [49.7, 702.0], [49.8, 702.0], [49.9, 702.0], [50.0, 703.0], [50.1, 704.0], [50.2, 704.0], [50.3, 704.0], [50.4, 704.0], [50.5, 705.0], [50.6, 705.0], [50.7, 706.0], [50.8, 706.0], [50.9, 707.0], [51.0, 707.0], [51.1, 707.0], [51.2, 707.0], [51.3, 707.0], [51.4, 707.0], [51.5, 708.0], [51.6, 708.0], [51.7, 708.0], [51.8, 709.0], [51.9, 710.0], [52.0, 711.0], [52.1, 711.0], [52.2, 711.0], [52.3, 712.0], [52.4, 712.0], [52.5, 712.0], [52.6, 712.0], [52.7, 713.0], [52.8, 713.0], [52.9, 713.0], [53.0, 714.0], [53.1, 714.0], [53.2, 715.0], [53.3, 715.0], [53.4, 716.0], [53.5, 716.0], [53.6, 716.0], [53.7, 717.0], [53.8, 718.0], [53.9, 719.0], [54.0, 719.0], [54.1, 719.0], [54.2, 719.0], [54.3, 719.0], [54.4, 719.0], [54.5, 720.0], [54.6, 721.0], [54.7, 721.0], [54.8, 721.0], [54.9, 724.0], [55.0, 724.0], [55.1, 724.0], [55.2, 725.0], [55.3, 727.0], [55.4, 728.0], [55.5, 728.0], [55.6, 729.0], [55.7, 731.0], [55.8, 731.0], [55.9, 731.0], [56.0, 732.0], [56.1, 733.0], [56.2, 736.0], [56.3, 736.0], [56.4, 737.0], [56.5, 739.0], [56.6, 739.0], [56.7, 739.0], [56.8, 739.0], [56.9, 740.0], [57.0, 740.0], [57.1, 740.0], [57.2, 740.0], [57.3, 744.0], [57.4, 744.0], [57.5, 744.0], [57.6, 745.0], [57.7, 745.0], [57.8, 745.0], [57.9, 748.0], [58.0, 748.0], [58.1, 751.0], [58.2, 751.0], [58.3, 752.0], [58.4, 754.0], [58.5, 754.0], [58.6, 755.0], [58.7, 755.0], [58.8, 756.0], [58.9, 756.0], [59.0, 758.0], [59.1, 758.0], [59.2, 760.0], [59.3, 760.0], [59.4, 760.0], [59.5, 760.0], [59.6, 761.0], [59.7, 761.0], [59.8, 762.0], [59.9, 765.0], [60.0, 765.0], [60.1, 765.0], [60.2, 765.0], [60.3, 765.0], [60.4, 765.0], [60.5, 768.0], [60.6, 768.0], [60.7, 768.0], [60.8, 768.0], [60.9, 769.0], [61.0, 769.0], [61.1, 773.0], [61.2, 773.0], [61.3, 773.0], [61.4, 774.0], [61.5, 779.0], [61.6, 779.0], [61.7, 781.0], [61.8, 782.0], [61.9, 782.0], [62.0, 784.0], [62.1, 787.0], [62.2, 791.0], [62.3, 791.0], [62.4, 791.0], [62.5, 791.0], [62.6, 792.0], [62.7, 792.0], [62.8, 795.0], [62.9, 797.0], [63.0, 798.0], [63.1, 798.0], [63.2, 800.0], [63.3, 802.0], [63.4, 802.0], [63.5, 807.0], [63.6, 807.0], [63.7, 810.0], [63.8, 810.0], [63.9, 812.0], [64.0, 815.0], [64.1, 815.0], [64.2, 815.0], [64.3, 816.0], [64.4, 817.0], [64.5, 823.0], [64.6, 823.0], [64.7, 824.0], [64.8, 827.0], [64.9, 828.0], [65.0, 828.0], [65.1, 828.0], [65.2, 828.0], [65.3, 828.0], [65.4, 829.0], [65.5, 831.0], [65.6, 831.0], [65.7, 831.0], [65.8, 833.0], [65.9, 834.0], [66.0, 834.0], [66.1, 834.0], [66.2, 837.0], [66.3, 837.0], [66.4, 841.0], [66.5, 841.0], [66.6, 841.0], [66.7, 841.0], [66.8, 841.0], [66.9, 842.0], [67.0, 843.0], [67.1, 844.0], [67.2, 844.0], [67.3, 845.0], [67.4, 846.0], [67.5, 846.0], [67.6, 846.0], [67.7, 846.0], [67.8, 848.0], [67.9, 850.0], [68.0, 850.0], [68.1, 850.0], [68.2, 851.0], [68.3, 852.0], [68.4, 852.0], [68.5, 853.0], [68.6, 853.0], [68.7, 853.0], [68.8, 855.0], [68.9, 857.0], [69.0, 857.0], [69.1, 857.0], [69.2, 858.0], [69.3, 859.0], [69.4, 859.0], [69.5, 859.0], [69.6, 860.0], [69.7, 860.0], [69.8, 860.0], [69.9, 860.0], [70.0, 862.0], [70.1, 863.0], [70.2, 863.0], [70.3, 863.0], [70.4, 863.0], [70.5, 863.0], [70.6, 863.0], [70.7, 863.0], [70.8, 865.0], [70.9, 865.0], [71.0, 865.0], [71.1, 867.0], [71.2, 867.0], [71.3, 867.0], [71.4, 867.0], [71.5, 868.0], [71.6, 868.0], [71.7, 868.0], [71.8, 869.0], [71.9, 869.0], [72.0, 873.0], [72.1, 873.0], [72.2, 875.0], [72.3, 875.0], [72.4, 878.0], [72.5, 878.0], [72.6, 879.0], [72.7, 879.0], [72.8, 880.0], [72.9, 880.0], [73.0, 881.0], [73.1, 882.0], [73.2, 884.0], [73.3, 884.0], [73.4, 885.0], [73.5, 885.0], [73.6, 885.0], [73.7, 885.0], [73.8, 885.0], [73.9, 889.0], [74.0, 889.0], [74.1, 893.0], [74.2, 893.0], [74.3, 894.0], [74.4, 894.0], [74.5, 894.0], [74.6, 895.0], [74.7, 896.0], [74.8, 896.0], [74.9, 896.0], [75.0, 897.0], [75.1, 897.0], [75.2, 898.0], [75.3, 898.0], [75.4, 898.0], [75.5, 898.0], [75.6, 898.0], [75.7, 898.0], [75.8, 900.0], [75.9, 900.0], [76.0, 901.0], [76.1, 901.0], [76.2, 901.0], [76.3, 901.0], [76.4, 902.0], [76.5, 903.0], [76.6, 905.0], [76.7, 905.0], [76.8, 905.0], [76.9, 905.0], [77.0, 905.0], [77.1, 905.0], [77.2, 905.0], [77.3, 906.0], [77.4, 906.0], [77.5, 906.0], [77.6, 907.0], [77.7, 907.0], [77.8, 907.0], [77.9, 911.0], [78.0, 913.0], [78.1, 914.0], [78.2, 914.0], [78.3, 915.0], [78.4, 916.0], [78.5, 916.0], [78.6, 916.0], [78.7, 918.0], [78.8, 919.0], [78.9, 919.0], [79.0, 920.0], [79.1, 921.0], [79.2, 921.0], [79.3, 921.0], [79.4, 925.0], [79.5, 925.0], [79.6, 925.0], [79.7, 925.0], [79.8, 928.0], [79.9, 930.0], [80.0, 931.0], [80.1, 931.0], [80.2, 933.0], [80.3, 934.0], [80.4, 934.0], [80.5, 938.0], [80.6, 940.0], [80.7, 941.0], [80.8, 941.0], [80.9, 944.0], [81.0, 948.0], [81.1, 949.0], [81.2, 949.0], [81.3, 952.0], [81.4, 952.0], [81.5, 953.0], [81.6, 953.0], [81.7, 955.0], [81.8, 956.0], [81.9, 956.0], [82.0, 957.0], [82.1, 959.0], [82.2, 962.0], [82.3, 962.0], [82.4, 964.0], [82.5, 965.0], [82.6, 965.0], [82.7, 965.0], [82.8, 967.0], [82.9, 971.0], [83.0, 975.0], [83.1, 975.0], [83.2, 975.0], [83.3, 976.0], [83.4, 976.0], [83.5, 977.0], [83.6, 980.0], [83.7, 980.0], [83.8, 980.0], [83.9, 982.0], [84.0, 982.0], [84.1, 982.0], [84.2, 982.0], [84.3, 983.0], [84.4, 983.0], [84.5, 983.0], [84.6, 983.0], [84.7, 985.0], [84.8, 988.0], [84.9, 989.0], [85.0, 989.0], [85.1, 992.0], [85.2, 1000.0], [85.3, 1000.0], [85.4, 1001.0], [85.5, 1003.0], [85.6, 1004.0], [85.7, 1004.0], [85.8, 1007.0], [85.9, 1007.0], [86.0, 1008.0], [86.1, 1008.0], [86.2, 1009.0], [86.3, 1009.0], [86.4, 1009.0], [86.5, 1009.0], [86.6, 1013.0], [86.7, 1014.0], [86.8, 1014.0], [86.9, 1016.0], [87.0, 1018.0], [87.1, 1021.0], [87.2, 1021.0], [87.3, 1021.0], [87.4, 1029.0], [87.5, 1030.0], [87.6, 1030.0], [87.7, 1030.0], [87.8, 1031.0], [87.9, 1035.0], [88.0, 1035.0], [88.1, 1036.0], [88.2, 1038.0], [88.3, 1038.0], [88.4, 1038.0], [88.5, 1039.0], [88.6, 1039.0], [88.7, 1039.0], [88.8, 1040.0], [88.9, 1045.0], [89.0, 1045.0], [89.1, 1045.0], [89.2, 1046.0], [89.3, 1046.0], [89.4, 1048.0], [89.5, 1048.0], [89.6, 1048.0], [89.7, 1049.0], [89.8, 1052.0], [89.9, 1052.0], [90.0, 1062.0], [90.1, 1063.0], [90.2, 1063.0], [90.3, 1064.0], [90.4, 1064.0], [90.5, 1064.0], [90.6, 1064.0], [90.7, 1066.0], [90.8, 1067.0], [90.9, 1069.0], [91.0, 1069.0], [91.1, 1073.0], [91.2, 1075.0], [91.3, 1077.0], [91.4, 1077.0], [91.5, 1084.0], [91.6, 1092.0], [91.7, 1092.0], [91.8, 1095.0], [91.9, 1098.0], [92.0, 1101.0], [92.1, 1101.0], [92.2, 1101.0], [92.3, 1119.0], [92.4, 1128.0], [92.5, 1128.0], [92.6, 1143.0], [92.7, 1151.0], [92.8, 1159.0], [92.9, 1159.0], [93.0, 1160.0], [93.1, 1162.0], [93.2, 1179.0], [93.3, 1179.0], [93.4, 1183.0], [93.5, 1190.0], [93.6, 1190.0], [93.7, 1191.0], [93.8, 1204.0], [93.9, 1204.0], [94.0, 1204.0], [94.1, 1208.0], [94.2, 1209.0], [94.3, 1212.0], [94.4, 1212.0], [94.5, 1214.0], [94.6, 1225.0], [94.7, 1231.0], [94.8, 1231.0], [94.9, 1252.0], [95.0, 1274.0], [95.1, 1274.0], [95.2, 1276.0], [95.3, 1292.0], [95.4, 1293.0], [95.5, 1293.0], [95.6, 1302.0], [95.7, 1322.0], [95.8, 1328.0], [95.9, 1328.0], [96.0, 1342.0], [96.1, 1354.0], [96.2, 1365.0], [96.3, 1365.0], [96.4, 1375.0], [96.5, 1383.0], [96.6, 1396.0], [96.7, 1396.0], [96.8, 1397.0], [96.9, 1398.0], [97.0, 1398.0], [97.1, 1421.0], [97.2, 1478.0], [97.3, 1533.0], [97.4, 1533.0], [97.5, 1536.0], [97.6, 1547.0], [97.7, 1548.0], [97.8, 1548.0], [97.9, 1556.0], [98.0, 1610.0], [98.1, 1668.0], [98.2, 1668.0], [98.3, 1682.0], [98.4, 1903.0], [98.5, 1903.0], [98.6, 2006.0], [98.7, 2010.0], [98.8, 2045.0], [98.9, 2045.0], [99.0, 2254.0], [99.1, 2560.0], [99.2, 2906.0], [99.3, 2906.0], [99.4, 3020.0], [99.5, 3026.0], [99.6, 3127.0], [99.7, 3127.0], [99.8, 3221.0], [99.9, 3274.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 109.0, "series": [{"data": [[2200.0, 1.0], [600.0, 95.0], [2500.0, 1.0], [700.0, 109.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 48.0], [3200.0, 2.0], [800.0, 93.0], [900.0, 69.0], [1000.0, 50.0], [1100.0, 13.0], [300.0, 84.0], [1200.0, 13.0], [1300.0, 11.0], [1400.0, 2.0], [1500.0, 5.0], [400.0, 65.0], [100.0, 23.0], [1600.0, 3.0], [1900.0, 1.0], [500.0, 40.0], [2000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 495.0, "series": [{"data": [[0.0, 220.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 495.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60384338E12, "maxY": 1.0, "series": [{"data": [[1.6038435E12, 1.0], [1.6038438E12, 1.0], [1.60384362E12, 1.0], [1.60384344E12, 1.0], [1.60384392E12, 1.0], [1.60384374E12, 1.0], [1.60384356E12, 1.0], [1.60384338E12, 1.0], [1.60384386E12, 1.0], [1.60384368E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384392E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 719.6734693877555, "minX": 1.0, "maxY": 719.6734693877555, "series": [{"data": [[1.0, 719.6734693877555]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 719.6734693877555]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 138.18333333333334, "minX": 1.60384338E12, "maxY": 281301.45, "series": [{"data": [[1.6038435E12, 169504.83333333334], [1.6038438E12, 164498.2], [1.60384362E12, 281301.45], [1.60384344E12, 211607.51666666666], [1.60384392E12, 13869.2], [1.60384374E12, 165112.11666666667], [1.60384356E12, 146828.25], [1.60384338E12, 242828.31666666668], [1.60384386E12, 237344.88333333333], [1.60384368E12, 202887.28333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038435E12, 521.6833333333333], [1.6038438E12, 537.2833333333333], [1.60384362E12, 822.1], [1.60384344E12, 516.6666666666666], [1.60384392E12, 138.18333333333334], [1.60384374E12, 536.4833333333333], [1.60384356E12, 604.1833333333333], [1.60384338E12, 482.98333333333335], [1.60384386E12, 761.4166666666666], [1.60384368E12, 602.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384392E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 382.30000000000007, "minX": 1.60384338E12, "maxY": 891.3823529411766, "series": [{"data": [[1.6038435E12, 870.8115942028985], [1.6038438E12, 834.5211267605636], [1.60384362E12, 540.8828828828829], [1.60384344E12, 891.3823529411766], [1.60384392E12, 382.30000000000007], [1.60384374E12, 846.5211267605634], [1.60384356E12, 745.6], [1.60384338E12, 645.0624999999999], [1.60384386E12, 597.4653465346536], [1.60384368E12, 749.3249999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384392E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 382.0, "minX": 1.60384338E12, "maxY": 890.0882352941178, "series": [{"data": [[1.6038435E12, 869.3623188405795], [1.6038438E12, 833.3521126760568], [1.60384362E12, 539.7477477477479], [1.60384344E12, 890.0882352941178], [1.60384392E12, 382.0], [1.60384374E12, 845.3380281690139], [1.60384356E12, 744.4999999999999], [1.60384338E12, 643.6250000000003], [1.60384386E12, 596.4356435643563], [1.60384368E12, 748.1624999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384392E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60384338E12, "maxY": 0.5312499999999998, "series": [{"data": [[1.6038435E12, 0.028985507246376815], [1.6038438E12, 0.028169014084507043], [1.60384362E12, 0.01801801801801802], [1.60384344E12, 0.044117647058823546], [1.60384392E12, 0.0], [1.60384374E12, 0.028169014084507043], [1.60384356E12, 0.025000000000000005], [1.60384338E12, 0.5312499999999998], [1.60384386E12, 0.019801980198019806], [1.60384368E12, 0.0125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384392E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60384338E12, "maxY": 3274.0, "series": [{"data": [[1.6038435E12, 2906.0], [1.6038438E12, 1209.0], [1.60384362E12, 3221.0], [1.60384344E12, 3026.0], [1.60384392E12, 1048.0], [1.60384374E12, 1204.0], [1.60384356E12, 3127.0], [1.60384338E12, 3274.0], [1.60384386E12, 2010.0], [1.60384368E12, 2254.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038435E12, 654.0], [1.6038438E12, 347.0], [1.60384362E12, 184.03199989318847], [1.60384344E12, 321.0], [1.60384392E12, 307.0], [1.60384374E12, 657.0], [1.60384356E12, 424.0], [1.60384338E12, 190.0], [1.60384386E12, 208.0], [1.60384368E12, 183.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038435E12, 654.0], [1.6038438E12, 347.0], [1.60384362E12, 184.4352000427246], [1.60384344E12, 321.0], [1.60384392E12, 307.0], [1.60384374E12, 657.0], [1.60384356E12, 424.0], [1.60384338E12, 190.0], [1.60384386E12, 208.07840007781982], [1.60384368E12, 183.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038435E12, 654.0], [1.6038438E12, 347.0], [1.60384362E12, 184.25599994659424], [1.60384344E12, 321.0], [1.60384392E12, 307.0], [1.60384374E12, 657.0], [1.60384356E12, 424.0], [1.60384338E12, 190.0], [1.60384386E12, 208.0], [1.60384368E12, 183.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038435E12, 654.0], [1.6038438E12, 347.0], [1.60384362E12, 184.0], [1.60384344E12, 321.0], [1.60384392E12, 307.0], [1.60384374E12, 657.0], [1.60384356E12, 424.0], [1.60384338E12, 190.0], [1.60384386E12, 208.0], [1.60384368E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038435E12, 850.0], [1.6038438E12, 841.0], [1.60384362E12, 332.0], [1.60384344E12, 762.5], [1.60384392E12, 324.0], [1.60384374E12, 815.0], [1.60384356E12, 731.5], [1.60384338E12, 540.5], [1.60384386E12, 446.0], [1.60384368E12, 705.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384392E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 863.0, "series": [{"data": [[1.0, 863.0], [2.0, 681.5], [4.0, 214.5], [5.0, 198.0], [3.0, 319.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 862.0, "series": [{"data": [[1.0, 862.0], [2.0, 680.0], [4.0, 214.5], [5.0, 198.0], [3.0, 319.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.60384338E12, "maxY": 1.85, "series": [{"data": [[1.6038435E12, 1.15], [1.6038438E12, 1.1833333333333333], [1.60384362E12, 1.85], [1.60384344E12, 1.1333333333333333], [1.60384392E12, 0.31666666666666665], [1.60384374E12, 1.1833333333333333], [1.60384356E12, 1.3333333333333333], [1.60384338E12, 1.0833333333333333], [1.60384386E12, 1.6833333333333333], [1.60384368E12, 1.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384392E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60384338E12, "maxY": 1.85, "series": [{"data": [[1.6038435E12, 1.15], [1.6038438E12, 1.1833333333333333], [1.60384362E12, 1.85], [1.60384344E12, 1.1333333333333333], [1.60384392E12, 0.3333333333333333], [1.60384374E12, 1.1833333333333333], [1.60384356E12, 1.3333333333333333], [1.60384338E12, 1.0666666666666667], [1.60384386E12, 1.6833333333333333], [1.60384368E12, 1.3333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60384392E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60384338E12, "maxY": 1.85, "series": [{"data": [[1.6038435E12, 1.15], [1.6038438E12, 1.1833333333333333], [1.60384362E12, 1.85], [1.60384344E12, 1.1333333333333333], [1.60384392E12, 0.3333333333333333], [1.60384374E12, 1.1833333333333333], [1.60384356E12, 1.3333333333333333], [1.60384338E12, 1.0666666666666667], [1.60384386E12, 1.6833333333333333], [1.60384368E12, 1.3333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384392E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60384338E12, "maxY": 1.85, "series": [{"data": [[1.6038435E12, 1.15], [1.6038438E12, 1.1833333333333333], [1.60384362E12, 1.85], [1.60384344E12, 1.1333333333333333], [1.60384392E12, 0.3333333333333333], [1.60384374E12, 1.1833333333333333], [1.60384356E12, 1.3333333333333333], [1.60384338E12, 1.0666666666666667], [1.60384386E12, 1.6833333333333333], [1.60384368E12, 1.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60384392E12, "title": "Total Transactions Per Second"}},
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

