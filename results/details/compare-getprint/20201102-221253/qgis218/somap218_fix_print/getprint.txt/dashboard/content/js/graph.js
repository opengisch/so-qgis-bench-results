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
        data: {"result": {"minY": 729.0, "minX": 0.0, "maxY": 19174.0, "series": [{"data": [[0.0, 729.0], [0.1, 729.0], [0.2, 729.0], [0.3, 729.0], [0.4, 729.0], [0.5, 729.0], [0.6, 729.0], [0.7, 729.0], [0.8, 729.0], [0.9, 1097.0], [1.0, 1097.0], [1.1, 1097.0], [1.2, 1097.0], [1.3, 1097.0], [1.4, 1097.0], [1.5, 1097.0], [1.6, 1097.0], [1.7, 1097.0], [1.8, 1890.0], [1.9, 1890.0], [2.0, 1890.0], [2.1, 1890.0], [2.2, 1890.0], [2.3, 1890.0], [2.4, 1890.0], [2.5, 1890.0], [2.6, 1890.0], [2.7, 2287.0], [2.8, 2287.0], [2.9, 2287.0], [3.0, 2287.0], [3.1, 2287.0], [3.2, 2287.0], [3.3, 2287.0], [3.4, 2287.0], [3.5, 2287.0], [3.6, 2386.0], [3.7, 2386.0], [3.8, 2386.0], [3.9, 2386.0], [4.0, 2386.0], [4.1, 2386.0], [4.2, 2386.0], [4.3, 2386.0], [4.4, 2386.0], [4.5, 2628.0], [4.6, 2628.0], [4.7, 2628.0], [4.8, 2628.0], [4.9, 2628.0], [5.0, 2628.0], [5.1, 2628.0], [5.2, 2628.0], [5.3, 2628.0], [5.4, 2779.0], [5.5, 2779.0], [5.6, 2779.0], [5.7, 2779.0], [5.8, 2779.0], [5.9, 2779.0], [6.0, 2779.0], [6.1, 2779.0], [6.2, 2779.0], [6.3, 2888.0], [6.4, 2888.0], [6.5, 2888.0], [6.6, 2888.0], [6.7, 2888.0], [6.8, 2888.0], [6.9, 2888.0], [7.0, 2888.0], [7.1, 2888.0], [7.2, 2891.0], [7.3, 2891.0], [7.4, 2891.0], [7.5, 2891.0], [7.6, 2891.0], [7.7, 2891.0], [7.8, 2891.0], [7.9, 2891.0], [8.0, 2891.0], [8.1, 3169.0], [8.2, 3169.0], [8.3, 3169.0], [8.4, 3169.0], [8.5, 3169.0], [8.6, 3169.0], [8.7, 3169.0], [8.8, 3169.0], [8.9, 3169.0], [9.0, 3303.0], [9.1, 3303.0], [9.2, 3303.0], [9.3, 3303.0], [9.4, 3303.0], [9.5, 3303.0], [9.6, 3303.0], [9.7, 3303.0], [9.8, 3303.0], [9.9, 3384.0], [10.0, 3384.0], [10.1, 3384.0], [10.2, 3384.0], [10.3, 3384.0], [10.4, 3384.0], [10.5, 3384.0], [10.6, 3384.0], [10.7, 3384.0], [10.8, 3531.0], [10.9, 3531.0], [11.0, 3531.0], [11.1, 3531.0], [11.2, 3531.0], [11.3, 3531.0], [11.4, 3531.0], [11.5, 3531.0], [11.6, 3531.0], [11.7, 3535.0], [11.8, 3535.0], [11.9, 3535.0], [12.0, 3535.0], [12.1, 3535.0], [12.2, 3535.0], [12.3, 3535.0], [12.4, 3535.0], [12.5, 3544.0], [12.6, 3544.0], [12.7, 3544.0], [12.8, 3544.0], [12.9, 3544.0], [13.0, 3544.0], [13.1, 3544.0], [13.2, 3544.0], [13.3, 3544.0], [13.4, 3548.0], [13.5, 3548.0], [13.6, 3548.0], [13.7, 3548.0], [13.8, 3548.0], [13.9, 3548.0], [14.0, 3548.0], [14.1, 3548.0], [14.2, 3548.0], [14.3, 3616.0], [14.4, 3616.0], [14.5, 3616.0], [14.6, 3616.0], [14.7, 3616.0], [14.8, 3616.0], [14.9, 3616.0], [15.0, 3616.0], [15.1, 3616.0], [15.2, 3626.0], [15.3, 3626.0], [15.4, 3626.0], [15.5, 3626.0], [15.6, 3626.0], [15.7, 3626.0], [15.8, 3626.0], [15.9, 3626.0], [16.0, 3626.0], [16.1, 3842.0], [16.2, 3842.0], [16.3, 3842.0], [16.4, 3842.0], [16.5, 3842.0], [16.6, 3842.0], [16.7, 3842.0], [16.8, 3842.0], [16.9, 3842.0], [17.0, 3870.0], [17.1, 3870.0], [17.2, 3870.0], [17.3, 3870.0], [17.4, 3870.0], [17.5, 3870.0], [17.6, 3870.0], [17.7, 3870.0], [17.8, 3870.0], [17.9, 3963.0], [18.0, 3963.0], [18.1, 3963.0], [18.2, 3963.0], [18.3, 3963.0], [18.4, 3963.0], [18.5, 3963.0], [18.6, 3963.0], [18.7, 3963.0], [18.8, 3972.0], [18.9, 3972.0], [19.0, 3972.0], [19.1, 3972.0], [19.2, 3972.0], [19.3, 3972.0], [19.4, 3972.0], [19.5, 3972.0], [19.6, 3972.0], [19.7, 4007.0], [19.8, 4007.0], [19.9, 4007.0], [20.0, 4007.0], [20.1, 4007.0], [20.2, 4007.0], [20.3, 4007.0], [20.4, 4007.0], [20.5, 4007.0], [20.6, 4062.0], [20.7, 4062.0], [20.8, 4062.0], [20.9, 4062.0], [21.0, 4062.0], [21.1, 4062.0], [21.2, 4062.0], [21.3, 4062.0], [21.4, 4062.0], [21.5, 4073.0], [21.6, 4073.0], [21.7, 4073.0], [21.8, 4073.0], [21.9, 4073.0], [22.0, 4073.0], [22.1, 4073.0], [22.2, 4073.0], [22.3, 4073.0], [22.4, 4080.0], [22.5, 4080.0], [22.6, 4080.0], [22.7, 4080.0], [22.8, 4080.0], [22.9, 4080.0], [23.0, 4080.0], [23.1, 4080.0], [23.2, 4080.0], [23.3, 4103.0], [23.4, 4103.0], [23.5, 4103.0], [23.6, 4103.0], [23.7, 4103.0], [23.8, 4103.0], [23.9, 4103.0], [24.0, 4103.0], [24.1, 4103.0], [24.2, 4133.0], [24.3, 4133.0], [24.4, 4133.0], [24.5, 4133.0], [24.6, 4133.0], [24.7, 4133.0], [24.8, 4133.0], [24.9, 4133.0], [25.0, 4171.0], [25.1, 4171.0], [25.2, 4171.0], [25.3, 4171.0], [25.4, 4171.0], [25.5, 4171.0], [25.6, 4171.0], [25.7, 4171.0], [25.8, 4171.0], [25.9, 4223.0], [26.0, 4223.0], [26.1, 4223.0], [26.2, 4223.0], [26.3, 4223.0], [26.4, 4223.0], [26.5, 4223.0], [26.6, 4223.0], [26.7, 4223.0], [26.8, 4248.0], [26.9, 4248.0], [27.0, 4248.0], [27.1, 4248.0], [27.2, 4248.0], [27.3, 4248.0], [27.4, 4248.0], [27.5, 4248.0], [27.6, 4248.0], [27.7, 4414.0], [27.8, 4414.0], [27.9, 4414.0], [28.0, 4414.0], [28.1, 4414.0], [28.2, 4414.0], [28.3, 4414.0], [28.4, 4414.0], [28.5, 4414.0], [28.6, 4417.0], [28.7, 4417.0], [28.8, 4417.0], [28.9, 4417.0], [29.0, 4417.0], [29.1, 4417.0], [29.2, 4417.0], [29.3, 4417.0], [29.4, 4417.0], [29.5, 4422.0], [29.6, 4422.0], [29.7, 4422.0], [29.8, 4422.0], [29.9, 4422.0], [30.0, 4422.0], [30.1, 4422.0], [30.2, 4422.0], [30.3, 4422.0], [30.4, 4476.0], [30.5, 4476.0], [30.6, 4476.0], [30.7, 4476.0], [30.8, 4476.0], [30.9, 4476.0], [31.0, 4476.0], [31.1, 4476.0], [31.2, 4476.0], [31.3, 4481.0], [31.4, 4481.0], [31.5, 4481.0], [31.6, 4481.0], [31.7, 4481.0], [31.8, 4481.0], [31.9, 4481.0], [32.0, 4481.0], [32.1, 4481.0], [32.2, 4564.0], [32.3, 4564.0], [32.4, 4564.0], [32.5, 4564.0], [32.6, 4564.0], [32.7, 4564.0], [32.8, 4564.0], [32.9, 4564.0], [33.0, 4564.0], [33.1, 4655.0], [33.2, 4655.0], [33.3, 4655.0], [33.4, 4655.0], [33.5, 4655.0], [33.6, 4655.0], [33.7, 4655.0], [33.8, 4655.0], [33.9, 4655.0], [34.0, 4730.0], [34.1, 4730.0], [34.2, 4730.0], [34.3, 4730.0], [34.4, 4730.0], [34.5, 4730.0], [34.6, 4730.0], [34.7, 4730.0], [34.8, 4730.0], [34.9, 4743.0], [35.0, 4743.0], [35.1, 4743.0], [35.2, 4743.0], [35.3, 4743.0], [35.4, 4743.0], [35.5, 4743.0], [35.6, 4743.0], [35.7, 4743.0], [35.8, 4783.0], [35.9, 4783.0], [36.0, 4783.0], [36.1, 4783.0], [36.2, 4783.0], [36.3, 4783.0], [36.4, 4783.0], [36.5, 4783.0], [36.6, 4783.0], [36.7, 4884.0], [36.8, 4884.0], [36.9, 4884.0], [37.0, 4884.0], [37.1, 4884.0], [37.2, 4884.0], [37.3, 4884.0], [37.4, 4884.0], [37.5, 4884.0], [37.6, 4893.0], [37.7, 4893.0], [37.8, 4893.0], [37.9, 4893.0], [38.0, 4893.0], [38.1, 4893.0], [38.2, 4893.0], [38.3, 4893.0], [38.4, 4950.0], [38.5, 4950.0], [38.6, 4950.0], [38.7, 4950.0], [38.8, 4950.0], [38.9, 4950.0], [39.0, 4950.0], [39.1, 4950.0], [39.2, 4950.0], [39.3, 5045.0], [39.4, 5045.0], [39.5, 5045.0], [39.6, 5045.0], [39.7, 5045.0], [39.8, 5045.0], [39.9, 5045.0], [40.0, 5045.0], [40.1, 5045.0], [40.2, 5091.0], [40.3, 5091.0], [40.4, 5091.0], [40.5, 5091.0], [40.6, 5091.0], [40.7, 5091.0], [40.8, 5091.0], [40.9, 5091.0], [41.0, 5091.0], [41.1, 5146.0], [41.2, 5146.0], [41.3, 5146.0], [41.4, 5146.0], [41.5, 5146.0], [41.6, 5146.0], [41.7, 5146.0], [41.8, 5146.0], [41.9, 5146.0], [42.0, 5255.0], [42.1, 5255.0], [42.2, 5255.0], [42.3, 5255.0], [42.4, 5255.0], [42.5, 5255.0], [42.6, 5255.0], [42.7, 5255.0], [42.8, 5255.0], [42.9, 5268.0], [43.0, 5268.0], [43.1, 5268.0], [43.2, 5268.0], [43.3, 5268.0], [43.4, 5268.0], [43.5, 5268.0], [43.6, 5268.0], [43.7, 5268.0], [43.8, 5280.0], [43.9, 5280.0], [44.0, 5280.0], [44.1, 5280.0], [44.2, 5280.0], [44.3, 5280.0], [44.4, 5280.0], [44.5, 5280.0], [44.6, 5280.0], [44.7, 5478.0], [44.8, 5478.0], [44.9, 5478.0], [45.0, 5478.0], [45.1, 5478.0], [45.2, 5478.0], [45.3, 5478.0], [45.4, 5478.0], [45.5, 5478.0], [45.6, 5555.0], [45.7, 5555.0], [45.8, 5555.0], [45.9, 5555.0], [46.0, 5555.0], [46.1, 5555.0], [46.2, 5555.0], [46.3, 5555.0], [46.4, 5555.0], [46.5, 5607.0], [46.6, 5607.0], [46.7, 5607.0], [46.8, 5607.0], [46.9, 5607.0], [47.0, 5607.0], [47.1, 5607.0], [47.2, 5607.0], [47.3, 5607.0], [47.4, 5822.0], [47.5, 5822.0], [47.6, 5822.0], [47.7, 5822.0], [47.8, 5822.0], [47.9, 5822.0], [48.0, 5822.0], [48.1, 5822.0], [48.2, 5822.0], [48.3, 5864.0], [48.4, 5864.0], [48.5, 5864.0], [48.6, 5864.0], [48.7, 5864.0], [48.8, 5864.0], [48.9, 5864.0], [49.0, 5864.0], [49.1, 5864.0], [49.2, 6225.0], [49.3, 6225.0], [49.4, 6225.0], [49.5, 6225.0], [49.6, 6225.0], [49.7, 6225.0], [49.8, 6225.0], [49.9, 6225.0], [50.0, 6225.0], [50.1, 6279.0], [50.2, 6279.0], [50.3, 6279.0], [50.4, 6279.0], [50.5, 6279.0], [50.6, 6279.0], [50.7, 6279.0], [50.8, 6279.0], [50.9, 6383.0], [51.0, 6383.0], [51.1, 6383.0], [51.2, 6383.0], [51.3, 6383.0], [51.4, 6383.0], [51.5, 6383.0], [51.6, 6383.0], [51.7, 6383.0], [51.8, 6384.0], [51.9, 6384.0], [52.0, 6384.0], [52.1, 6384.0], [52.2, 6384.0], [52.3, 6384.0], [52.4, 6384.0], [52.5, 6384.0], [52.6, 6384.0], [52.7, 6456.0], [52.8, 6456.0], [52.9, 6456.0], [53.0, 6456.0], [53.1, 6456.0], [53.2, 6456.0], [53.3, 6456.0], [53.4, 6456.0], [53.5, 6456.0], [53.6, 6519.0], [53.7, 6519.0], [53.8, 6519.0], [53.9, 6519.0], [54.0, 6519.0], [54.1, 6519.0], [54.2, 6519.0], [54.3, 6519.0], [54.4, 6519.0], [54.5, 6635.0], [54.6, 6635.0], [54.7, 6635.0], [54.8, 6635.0], [54.9, 6635.0], [55.0, 6635.0], [55.1, 6635.0], [55.2, 6635.0], [55.3, 6635.0], [55.4, 6915.0], [55.5, 6915.0], [55.6, 6915.0], [55.7, 6915.0], [55.8, 6915.0], [55.9, 6915.0], [56.0, 6915.0], [56.1, 6915.0], [56.2, 6915.0], [56.3, 6943.0], [56.4, 6943.0], [56.5, 6943.0], [56.6, 6943.0], [56.7, 6943.0], [56.8, 6943.0], [56.9, 6943.0], [57.0, 6943.0], [57.1, 6943.0], [57.2, 7340.0], [57.3, 7340.0], [57.4, 7340.0], [57.5, 7340.0], [57.6, 7340.0], [57.7, 7340.0], [57.8, 7340.0], [57.9, 7340.0], [58.0, 7340.0], [58.1, 7346.0], [58.2, 7346.0], [58.3, 7346.0], [58.4, 7346.0], [58.5, 7346.0], [58.6, 7346.0], [58.7, 7346.0], [58.8, 7346.0], [58.9, 7346.0], [59.0, 7366.0], [59.1, 7366.0], [59.2, 7366.0], [59.3, 7366.0], [59.4, 7366.0], [59.5, 7366.0], [59.6, 7366.0], [59.7, 7366.0], [59.8, 7366.0], [59.9, 7494.0], [60.0, 7494.0], [60.1, 7494.0], [60.2, 7494.0], [60.3, 7494.0], [60.4, 7494.0], [60.5, 7494.0], [60.6, 7494.0], [60.7, 7494.0], [60.8, 7533.0], [60.9, 7533.0], [61.0, 7533.0], [61.1, 7533.0], [61.2, 7533.0], [61.3, 7533.0], [61.4, 7533.0], [61.5, 7533.0], [61.6, 7533.0], [61.7, 7561.0], [61.8, 7561.0], [61.9, 7561.0], [62.0, 7561.0], [62.1, 7561.0], [62.2, 7561.0], [62.3, 7561.0], [62.4, 7561.0], [62.5, 7561.0], [62.6, 7577.0], [62.7, 7577.0], [62.8, 7577.0], [62.9, 7577.0], [63.0, 7577.0], [63.1, 7577.0], [63.2, 7577.0], [63.3, 7577.0], [63.4, 7695.0], [63.5, 7695.0], [63.6, 7695.0], [63.7, 7695.0], [63.8, 7695.0], [63.9, 7695.0], [64.0, 7695.0], [64.1, 7695.0], [64.2, 7695.0], [64.3, 7813.0], [64.4, 7813.0], [64.5, 7813.0], [64.6, 7813.0], [64.7, 7813.0], [64.8, 7813.0], [64.9, 7813.0], [65.0, 7813.0], [65.1, 7813.0], [65.2, 7835.0], [65.3, 7835.0], [65.4, 7835.0], [65.5, 7835.0], [65.6, 7835.0], [65.7, 7835.0], [65.8, 7835.0], [65.9, 7835.0], [66.0, 7835.0], [66.1, 7897.0], [66.2, 7897.0], [66.3, 7897.0], [66.4, 7897.0], [66.5, 7897.0], [66.6, 7897.0], [66.7, 7897.0], [66.8, 7897.0], [66.9, 7897.0], [67.0, 8148.0], [67.1, 8148.0], [67.2, 8148.0], [67.3, 8148.0], [67.4, 8148.0], [67.5, 8148.0], [67.6, 8148.0], [67.7, 8148.0], [67.8, 8148.0], [67.9, 8626.0], [68.0, 8626.0], [68.1, 8626.0], [68.2, 8626.0], [68.3, 8626.0], [68.4, 8626.0], [68.5, 8626.0], [68.6, 8626.0], [68.7, 8626.0], [68.8, 8754.0], [68.9, 8754.0], [69.0, 8754.0], [69.1, 8754.0], [69.2, 8754.0], [69.3, 8754.0], [69.4, 8754.0], [69.5, 8754.0], [69.6, 8754.0], [69.7, 8863.0], [69.8, 8863.0], [69.9, 8863.0], [70.0, 8863.0], [70.1, 8863.0], [70.2, 8863.0], [70.3, 8863.0], [70.4, 8863.0], [70.5, 8863.0], [70.6, 8963.0], [70.7, 8963.0], [70.8, 8963.0], [70.9, 8963.0], [71.0, 8963.0], [71.1, 8963.0], [71.2, 8963.0], [71.3, 8963.0], [71.4, 8963.0], [71.5, 9070.0], [71.6, 9070.0], [71.7, 9070.0], [71.8, 9070.0], [71.9, 9070.0], [72.0, 9070.0], [72.1, 9070.0], [72.2, 9070.0], [72.3, 9070.0], [72.4, 9236.0], [72.5, 9236.0], [72.6, 9236.0], [72.7, 9236.0], [72.8, 9236.0], [72.9, 9236.0], [73.0, 9236.0], [73.1, 9236.0], [73.2, 9236.0], [73.3, 9403.0], [73.4, 9403.0], [73.5, 9403.0], [73.6, 9403.0], [73.7, 9403.0], [73.8, 9403.0], [73.9, 9403.0], [74.0, 9403.0], [74.1, 9403.0], [74.2, 9438.0], [74.3, 9438.0], [74.4, 9438.0], [74.5, 9438.0], [74.6, 9438.0], [74.7, 9438.0], [74.8, 9438.0], [74.9, 9438.0], [75.0, 9438.0], [75.1, 9474.0], [75.2, 9474.0], [75.3, 9474.0], [75.4, 9474.0], [75.5, 9474.0], [75.6, 9474.0], [75.7, 9474.0], [75.8, 9474.0], [75.9, 9507.0], [76.0, 9507.0], [76.1, 9507.0], [76.2, 9507.0], [76.3, 9507.0], [76.4, 9507.0], [76.5, 9507.0], [76.6, 9507.0], [76.7, 9507.0], [76.8, 9520.0], [76.9, 9520.0], [77.0, 9520.0], [77.1, 9520.0], [77.2, 9520.0], [77.3, 9520.0], [77.4, 9520.0], [77.5, 9520.0], [77.6, 9520.0], [77.7, 9588.0], [77.8, 9588.0], [77.9, 9588.0], [78.0, 9588.0], [78.1, 9588.0], [78.2, 9588.0], [78.3, 9588.0], [78.4, 9588.0], [78.5, 9588.0], [78.6, 9803.0], [78.7, 9803.0], [78.8, 9803.0], [78.9, 9803.0], [79.0, 9803.0], [79.1, 9803.0], [79.2, 9803.0], [79.3, 9803.0], [79.4, 9803.0], [79.5, 10160.0], [79.6, 10160.0], [79.7, 10160.0], [79.8, 10160.0], [79.9, 10160.0], [80.0, 10160.0], [80.1, 10160.0], [80.2, 10160.0], [80.3, 10160.0], [80.4, 10618.0], [80.5, 10618.0], [80.6, 10618.0], [80.7, 10618.0], [80.8, 10618.0], [80.9, 10618.0], [81.0, 10618.0], [81.1, 10618.0], [81.2, 10618.0], [81.3, 10753.0], [81.4, 10753.0], [81.5, 10753.0], [81.6, 10753.0], [81.7, 10753.0], [81.8, 10753.0], [81.9, 10753.0], [82.0, 10753.0], [82.1, 10753.0], [82.2, 10956.0], [82.3, 10956.0], [82.4, 10956.0], [82.5, 10956.0], [82.6, 10956.0], [82.7, 10956.0], [82.8, 10956.0], [82.9, 10956.0], [83.0, 10956.0], [83.1, 11179.0], [83.2, 11179.0], [83.3, 11179.0], [83.4, 11179.0], [83.5, 11179.0], [83.6, 11179.0], [83.7, 11179.0], [83.8, 11179.0], [83.9, 11179.0], [84.0, 11551.0], [84.1, 11551.0], [84.2, 11551.0], [84.3, 11551.0], [84.4, 11551.0], [84.5, 11551.0], [84.6, 11551.0], [84.7, 11551.0], [84.8, 11551.0], [84.9, 11599.0], [85.0, 11599.0], [85.1, 11599.0], [85.2, 11599.0], [85.3, 11599.0], [85.4, 11599.0], [85.5, 11599.0], [85.6, 11599.0], [85.7, 11599.0], [85.8, 11708.0], [85.9, 11708.0], [86.0, 11708.0], [86.1, 11708.0], [86.2, 11708.0], [86.3, 11708.0], [86.4, 11708.0], [86.5, 11708.0], [86.6, 11708.0], [86.7, 11931.0], [86.8, 11931.0], [86.9, 11931.0], [87.0, 11931.0], [87.1, 11931.0], [87.2, 11931.0], [87.3, 11931.0], [87.4, 11931.0], [87.5, 12147.0], [87.6, 12147.0], [87.7, 12147.0], [87.8, 12147.0], [87.9, 12147.0], [88.0, 12147.0], [88.1, 12147.0], [88.2, 12147.0], [88.3, 12147.0], [88.4, 12244.0], [88.5, 12244.0], [88.6, 12244.0], [88.7, 12244.0], [88.8, 12244.0], [88.9, 12244.0], [89.0, 12244.0], [89.1, 12244.0], [89.2, 12244.0], [89.3, 13011.0], [89.4, 13011.0], [89.5, 13011.0], [89.6, 13011.0], [89.7, 13011.0], [89.8, 13011.0], [89.9, 13011.0], [90.0, 13011.0], [90.1, 13011.0], [90.2, 13645.0], [90.3, 13645.0], [90.4, 13645.0], [90.5, 13645.0], [90.6, 13645.0], [90.7, 13645.0], [90.8, 13645.0], [90.9, 13645.0], [91.0, 13645.0], [91.1, 13711.0], [91.2, 13711.0], [91.3, 13711.0], [91.4, 13711.0], [91.5, 13711.0], [91.6, 13711.0], [91.7, 13711.0], [91.8, 13711.0], [91.9, 13711.0], [92.0, 13851.0], [92.1, 13851.0], [92.2, 13851.0], [92.3, 13851.0], [92.4, 13851.0], [92.5, 13851.0], [92.6, 13851.0], [92.7, 13851.0], [92.8, 13851.0], [92.9, 14019.0], [93.0, 14019.0], [93.1, 14019.0], [93.2, 14019.0], [93.3, 14019.0], [93.4, 14019.0], [93.5, 14019.0], [93.6, 14019.0], [93.7, 14019.0], [93.8, 14233.0], [93.9, 14233.0], [94.0, 14233.0], [94.1, 14233.0], [94.2, 14233.0], [94.3, 14233.0], [94.4, 14233.0], [94.5, 14233.0], [94.6, 14233.0], [94.7, 15726.0], [94.8, 15726.0], [94.9, 15726.0], [95.0, 15726.0], [95.1, 15726.0], [95.2, 15726.0], [95.3, 15726.0], [95.4, 15726.0], [95.5, 15726.0], [95.6, 16079.0], [95.7, 16079.0], [95.8, 16079.0], [95.9, 16079.0], [96.0, 16079.0], [96.1, 16079.0], [96.2, 16079.0], [96.3, 16079.0], [96.4, 16079.0], [96.5, 16717.0], [96.6, 16717.0], [96.7, 16717.0], [96.8, 16717.0], [96.9, 16717.0], [97.0, 16717.0], [97.1, 16717.0], [97.2, 16717.0], [97.3, 16717.0], [97.4, 17042.0], [97.5, 17042.0], [97.6, 17042.0], [97.7, 17042.0], [97.8, 17042.0], [97.9, 17042.0], [98.0, 17042.0], [98.1, 17042.0], [98.2, 17042.0], [98.3, 17778.0], [98.4, 17778.0], [98.5, 17778.0], [98.6, 17778.0], [98.7, 17778.0], [98.8, 17778.0], [98.9, 17778.0], [99.0, 17778.0], [99.1, 17778.0], [99.2, 19174.0], [99.3, 19174.0], [99.4, 19174.0], [99.5, 19174.0], [99.6, 19174.0], [99.7, 19174.0], [99.8, 19174.0], [99.9, 19174.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 5.0, "series": [{"data": [[700.0, 1.0], [1000.0, 1.0], [1800.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [2700.0, 1.0], [3100.0, 1.0], [3300.0, 2.0], [3500.0, 4.0], [3600.0, 2.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 4.0], [4200.0, 2.0], [4100.0, 3.0], [4600.0, 1.0], [4500.0, 1.0], [4400.0, 5.0], [4700.0, 3.0], [4800.0, 2.0], [5000.0, 2.0], [5100.0, 1.0], [4900.0, 1.0], [5200.0, 3.0], [5600.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5800.0, 2.0], [6300.0, 2.0], [6200.0, 2.0], [6600.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6900.0, 2.0], [7300.0, 3.0], [7400.0, 1.0], [7500.0, 3.0], [7600.0, 1.0], [7800.0, 3.0], [8100.0, 1.0], [8600.0, 1.0], [8700.0, 1.0], [8900.0, 1.0], [8800.0, 1.0], [9000.0, 1.0], [9200.0, 1.0], [9500.0, 3.0], [9400.0, 3.0], [10100.0, 1.0], [9800.0, 1.0], [10700.0, 1.0], [10600.0, 1.0], [11100.0, 1.0], [10900.0, 1.0], [11500.0, 2.0], [11700.0, 1.0], [12200.0, 1.0], [12100.0, 1.0], [11900.0, 1.0], [13000.0, 1.0], [13700.0, 1.0], [13600.0, 1.0], [13800.0, 1.0], [14000.0, 1.0], [14200.0, 1.0], [15700.0, 1.0], [16000.0, 1.0], [16700.0, 1.0], [17000.0, 1.0], [17700.0, 1.0], [19100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 110.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 110.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.60435524E12, "maxY": 10.0, "series": [{"data": [[1.60435524E12, 10.0], [1.60435536E12, 7.5], [1.6043553E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435536E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2386.0, "minX": 1.0, "maxY": 11551.0, "series": [{"data": [[8.0, 6383.0], [4.0, 5864.0], [2.0, 10618.0], [1.0, 11551.0], [9.0, 7494.0], [10.0, 7250.2427184466], [5.0, 3169.0], [6.0, 2386.0], [3.0, 6279.0], [7.0, 3303.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.598214285714285, 7176.982142857141]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 90.33333333333333, "minX": 1.60435524E12, "maxY": 3192508.25, "series": [{"data": [[1.60435524E12, 127974.75], [1.60435536E12, 595976.3333333334], [1.6043553E12, 3192508.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60435524E12, 90.33333333333333], [1.60435536E12, 245.08333333333334], [1.6043553E12, 1145.5166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435536E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5862.0, "minX": 1.60435524E12, "maxY": 7385.6091954023, "series": [{"data": [[1.60435524E12, 5862.0], [1.60435536E12, 6680.0], [1.6043553E12, 7385.6091954023]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435536E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5855.428571428572, "minX": 1.60435524E12, "maxY": 7373.2643678160875, "series": [{"data": [[1.60435524E12, 5855.428571428572], [1.60435536E12, 6668.166666666666], [1.6043553E12, 7373.2643678160875]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435536E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.2222222222222222, "minX": 1.60435524E12, "maxY": 8.0, "series": [{"data": [[1.60435524E12, 8.0], [1.60435536E12, 0.2222222222222222], [1.6043553E12, 0.9770114942528736]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435536E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 729.0, "minX": 1.60435524E12, "maxY": 19174.0, "series": [{"data": [[1.60435524E12, 9520.0], [1.60435536E12, 17042.0], [1.6043553E12, 19174.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60435524E12, 1890.0], [1.60435536E12, 2386.0], [1.6043553E12, 729.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60435524E12, 1890.0], [1.60435536E12, 2386.0], [1.6043553E12, 729.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60435524E12, 1890.0], [1.60435536E12, 2386.0], [1.6043553E12, 729.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60435524E12, 1890.0], [1.60435536E12, 2386.0], [1.6043553E12, 729.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60435524E12, 5607.0], [1.60435536E12, 6044.5], [1.6043553E12, 6456.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435536E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4152.0, "minX": 1.0, "maxY": 6699.5, "series": [{"data": [[2.0, 5542.5], [1.0, 6457.0], [4.0, 4152.0], [3.0, 6699.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4141.5, "minX": 1.0, "maxY": 6697.0, "series": [{"data": [[2.0, 5539.0], [1.0, 6445.0], [4.0, 4141.5], [3.0, 6697.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.60435524E12, "maxY": 1.45, "series": [{"data": [[1.60435524E12, 0.2833333333333333], [1.60435536E12, 0.13333333333333333], [1.6043553E12, 1.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435536E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60435524E12, "maxY": 1.45, "series": [{"data": [[1.60435524E12, 0.11666666666666667], [1.60435536E12, 0.3], [1.6043553E12, 1.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435536E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60435524E12, "maxY": 1.45, "series": [{"data": [[1.60435524E12, 0.11666666666666667], [1.60435536E12, 0.3], [1.6043553E12, 1.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435536E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60435524E12, "maxY": 1.45, "series": [{"data": [[1.60435524E12, 0.11666666666666667], [1.60435536E12, 0.3], [1.6043553E12, 1.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435536E12, "title": "Total Transactions Per Second"}},
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

