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
        data: {"result": {"minY": 2347.0, "minX": 0.0, "maxY": 8768.0, "series": [{"data": [[0.0, 2347.0], [0.1, 2347.0], [0.2, 2674.0], [0.3, 2676.0], [0.4, 2676.0], [0.5, 2820.0], [0.6, 2857.0], [0.7, 2874.0], [0.8, 2874.0], [0.9, 2903.0], [1.0, 2975.0], [1.1, 3031.0], [1.2, 3031.0], [1.3, 3045.0], [1.4, 3061.0], [1.5, 3064.0], [1.6, 3064.0], [1.7, 3065.0], [1.8, 3072.0], [1.9, 3072.0], [2.0, 3076.0], [2.1, 3083.0], [2.2, 3131.0], [2.3, 3131.0], [2.4, 3133.0], [2.5, 3150.0], [2.6, 3177.0], [2.7, 3177.0], [2.8, 3180.0], [2.9, 3188.0], [3.0, 3195.0], [3.1, 3195.0], [3.2, 3216.0], [3.3, 3222.0], [3.4, 3222.0], [3.5, 3230.0], [3.6, 3253.0], [3.7, 3254.0], [3.8, 3254.0], [3.9, 3264.0], [4.0, 3269.0], [4.1, 3275.0], [4.2, 3275.0], [4.3, 3283.0], [4.4, 3292.0], [4.5, 3304.0], [4.6, 3304.0], [4.7, 3313.0], [4.8, 3333.0], [4.9, 3342.0], [5.0, 3342.0], [5.1, 3365.0], [5.2, 3365.0], [5.3, 3365.0], [5.4, 3366.0], [5.5, 3388.0], [5.6, 3398.0], [5.7, 3398.0], [5.8, 3399.0], [5.9, 3413.0], [6.0, 3445.0], [6.1, 3445.0], [6.2, 3447.0], [6.3, 3450.0], [6.4, 3455.0], [6.5, 3455.0], [6.6, 3510.0], [6.7, 3523.0], [6.8, 3523.0], [6.9, 3530.0], [7.0, 3563.0], [7.1, 3566.0], [7.2, 3566.0], [7.3, 3568.0], [7.4, 3576.0], [7.5, 3577.0], [7.6, 3577.0], [7.7, 3583.0], [7.8, 3583.0], [7.9, 3585.0], [8.0, 3585.0], [8.1, 3587.0], [8.2, 3596.0], [8.3, 3603.0], [8.4, 3603.0], [8.5, 3604.0], [8.6, 3610.0], [8.7, 3610.0], [8.8, 3613.0], [8.9, 3615.0], [9.0, 3624.0], [9.1, 3624.0], [9.2, 3625.0], [9.3, 3632.0], [9.4, 3635.0], [9.5, 3635.0], [9.6, 3644.0], [9.7, 3649.0], [9.8, 3659.0], [9.9, 3659.0], [10.0, 3663.0], [10.1, 3669.0], [10.2, 3669.0], [10.3, 3671.0], [10.4, 3674.0], [10.5, 3680.0], [10.6, 3680.0], [10.7, 3688.0], [10.8, 3689.0], [10.9, 3689.0], [11.0, 3689.0], [11.1, 3694.0], [11.2, 3695.0], [11.3, 3705.0], [11.4, 3705.0], [11.5, 3710.0], [11.6, 3710.0], [11.7, 3710.0], [11.8, 3716.0], [11.9, 3722.0], [12.0, 3734.0], [12.1, 3734.0], [12.2, 3736.0], [12.3, 3737.0], [12.4, 3745.0], [12.5, 3745.0], [12.6, 3745.0], [12.7, 3745.0], [12.8, 3752.0], [12.9, 3752.0], [13.0, 3753.0], [13.1, 3754.0], [13.2, 3756.0], [13.3, 3756.0], [13.4, 3762.0], [13.5, 3776.0], [13.6, 3776.0], [13.7, 3777.0], [13.8, 3780.0], [13.9, 3781.0], [14.0, 3781.0], [14.1, 3800.0], [14.2, 3805.0], [14.3, 3809.0], [14.4, 3809.0], [14.5, 3813.0], [14.6, 3817.0], [14.7, 3825.0], [14.8, 3825.0], [14.9, 3828.0], [15.0, 3833.0], [15.1, 3833.0], [15.2, 3836.0], [15.3, 3845.0], [15.4, 3903.0], [15.5, 3903.0], [15.6, 3908.0], [15.7, 3908.0], [15.8, 3919.0], [15.9, 3919.0], [16.0, 3984.0], [16.1, 3987.0], [16.2, 3987.0], [16.3, 3987.0], [16.4, 3994.0], [16.5, 4001.0], [16.6, 4004.0], [16.7, 4004.0], [16.8, 4005.0], [16.9, 4005.0], [17.0, 4005.0], [17.1, 4005.0], [17.2, 4016.0], [17.3, 4026.0], [17.4, 4026.0], [17.5, 4030.0], [17.6, 4032.0], [17.7, 4035.0], [17.8, 4035.0], [17.9, 4036.0], [18.0, 4038.0], [18.1, 4059.0], [18.2, 4059.0], [18.3, 4077.0], [18.4, 4081.0], [18.5, 4081.0], [18.6, 4081.0], [18.7, 4086.0], [18.8, 4091.0], [18.9, 4091.0], [19.0, 4104.0], [19.1, 4119.0], [19.2, 4119.0], [19.3, 4119.0], [19.4, 4121.0], [19.5, 4122.0], [19.6, 4133.0], [19.7, 4133.0], [19.8, 4144.0], [19.9, 4148.0], [20.0, 4152.0], [20.1, 4152.0], [20.2, 4182.0], [20.3, 4185.0], [20.4, 4185.0], [20.5, 4196.0], [20.6, 4203.0], [20.7, 4206.0], [20.8, 4206.0], [20.9, 4216.0], [21.0, 4222.0], [21.1, 4224.0], [21.2, 4224.0], [21.3, 4225.0], [21.4, 4233.0], [21.5, 4236.0], [21.6, 4236.0], [21.7, 4239.0], [21.8, 4245.0], [21.9, 4245.0], [22.0, 4246.0], [22.1, 4247.0], [22.2, 4249.0], [22.3, 4249.0], [22.4, 4266.0], [22.5, 4266.0], [22.6, 4269.0], [22.7, 4269.0], [22.8, 4272.0], [22.9, 4288.0], [23.0, 4296.0], [23.1, 4296.0], [23.2, 4312.0], [23.3, 4314.0], [23.4, 4314.0], [23.5, 4334.0], [23.6, 4338.0], [23.7, 4341.0], [23.8, 4341.0], [23.9, 4349.0], [24.0, 4350.0], [24.1, 4357.0], [24.2, 4357.0], [24.3, 4359.0], [24.4, 4364.0], [24.5, 4375.0], [24.6, 4375.0], [24.7, 4391.0], [24.8, 4391.0], [24.9, 4396.0], [25.0, 4396.0], [25.1, 4405.0], [25.2, 4424.0], [25.3, 4424.0], [25.4, 4428.0], [25.5, 4432.0], [25.6, 4435.0], [25.7, 4435.0], [25.8, 4456.0], [25.9, 4468.0], [26.0, 4477.0], [26.1, 4477.0], [26.2, 4483.0], [26.3, 4487.0], [26.4, 4491.0], [26.5, 4491.0], [26.6, 4495.0], [26.7, 4507.0], [26.8, 4507.0], [26.9, 4508.0], [27.0, 4511.0], [27.1, 4514.0], [27.2, 4514.0], [27.3, 4517.0], [27.4, 4518.0], [27.5, 4520.0], [27.6, 4520.0], [27.7, 4520.0], [27.8, 4528.0], [27.9, 4531.0], [28.0, 4531.0], [28.1, 4534.0], [28.2, 4536.0], [28.3, 4545.0], [28.4, 4545.0], [28.5, 4553.0], [28.6, 4566.0], [28.7, 4566.0], [28.8, 4567.0], [28.9, 4571.0], [29.0, 4580.0], [29.1, 4580.0], [29.2, 4581.0], [29.3, 4583.0], [29.4, 4585.0], [29.5, 4585.0], [29.6, 4603.0], [29.7, 4604.0], [29.8, 4624.0], [29.9, 4624.0], [30.0, 4636.0], [30.1, 4641.0], [30.2, 4641.0], [30.3, 4647.0], [30.4, 4650.0], [30.5, 4668.0], [30.6, 4668.0], [30.7, 4669.0], [30.8, 4679.0], [30.9, 4685.0], [31.0, 4685.0], [31.1, 4696.0], [31.2, 4704.0], [31.3, 4719.0], [31.4, 4719.0], [31.5, 4730.0], [31.6, 4741.0], [31.7, 4741.0], [31.8, 4741.0], [31.9, 4746.0], [32.0, 4750.0], [32.1, 4750.0], [32.2, 4763.0], [32.3, 4775.0], [32.4, 4775.0], [32.5, 4775.0], [32.6, 4776.0], [32.7, 4780.0], [32.8, 4825.0], [32.9, 4825.0], [33.0, 4839.0], [33.1, 4840.0], [33.2, 4843.0], [33.3, 4843.0], [33.4, 4844.0], [33.5, 4845.0], [33.6, 4845.0], [33.7, 4856.0], [33.8, 4858.0], [33.9, 4862.0], [34.0, 4862.0], [34.1, 4862.0], [34.2, 4865.0], [34.3, 4866.0], [34.4, 4866.0], [34.5, 4903.0], [34.6, 4917.0], [34.7, 4925.0], [34.8, 4925.0], [34.9, 4933.0], [35.0, 4934.0], [35.1, 4934.0], [35.2, 4941.0], [35.3, 4942.0], [35.4, 4943.0], [35.5, 4943.0], [35.6, 4952.0], [35.7, 4952.0], [35.8, 4954.0], [35.9, 4954.0], [36.0, 4963.0], [36.1, 4968.0], [36.2, 4970.0], [36.3, 4970.0], [36.4, 4971.0], [36.5, 4974.0], [36.6, 4974.0], [36.7, 4974.0], [36.8, 4975.0], [36.9, 5002.0], [37.0, 5002.0], [37.1, 5004.0], [37.2, 5029.0], [37.3, 5029.0], [37.4, 5029.0], [37.5, 5037.0], [37.6, 5040.0], [37.7, 5044.0], [37.8, 5044.0], [37.9, 5052.0], [38.0, 5053.0], [38.1, 5063.0], [38.2, 5063.0], [38.3, 5077.0], [38.4, 5081.0], [38.5, 5081.0], [38.6, 5082.0], [38.7, 5083.0], [38.8, 5083.0], [38.9, 5083.0], [39.0, 5086.0], [39.1, 5087.0], [39.2, 5095.0], [39.3, 5095.0], [39.4, 5097.0], [39.5, 5106.0], [39.6, 5121.0], [39.7, 5121.0], [39.8, 5124.0], [39.9, 5131.0], [40.0, 5151.0], [40.1, 5151.0], [40.2, 5155.0], [40.3, 5163.0], [40.4, 5163.0], [40.5, 5175.0], [40.6, 5175.0], [40.7, 5180.0], [40.8, 5180.0], [40.9, 5201.0], [41.0, 5244.0], [41.1, 5254.0], [41.2, 5254.0], [41.3, 5255.0], [41.4, 5259.0], [41.5, 5263.0], [41.6, 5263.0], [41.7, 5265.0], [41.8, 5266.0], [41.9, 5266.0], [42.0, 5268.0], [42.1, 5270.0], [42.2, 5271.0], [42.3, 5271.0], [42.4, 5271.0], [42.5, 5279.0], [42.6, 5279.0], [42.7, 5279.0], [42.8, 5282.0], [42.9, 5288.0], [43.0, 5296.0], [43.1, 5296.0], [43.2, 5300.0], [43.3, 5300.0], [43.4, 5300.0], [43.5, 5302.0], [43.6, 5309.0], [43.7, 5309.0], [43.8, 5309.0], [43.9, 5311.0], [44.0, 5314.0], [44.1, 5319.0], [44.2, 5319.0], [44.3, 5321.0], [44.4, 5326.0], [44.5, 5332.0], [44.6, 5332.0], [44.7, 5335.0], [44.8, 5337.0], [44.9, 5340.0], [45.0, 5340.0], [45.1, 5341.0], [45.2, 5354.0], [45.3, 5354.0], [45.4, 5356.0], [45.5, 5358.0], [45.6, 5360.0], [45.7, 5360.0], [45.8, 5362.0], [45.9, 5362.0], [46.0, 5363.0], [46.1, 5363.0], [46.2, 5369.0], [46.3, 5370.0], [46.4, 5380.0], [46.5, 5380.0], [46.6, 5386.0], [46.7, 5389.0], [46.8, 5389.0], [46.9, 5390.0], [47.0, 5391.0], [47.1, 5396.0], [47.2, 5396.0], [47.3, 5398.0], [47.4, 5399.0], [47.5, 5401.0], [47.6, 5401.0], [47.7, 5402.0], [47.8, 5403.0], [47.9, 5404.0], [48.0, 5404.0], [48.1, 5407.0], [48.2, 5411.0], [48.3, 5418.0], [48.4, 5418.0], [48.5, 5419.0], [48.6, 5419.0], [48.7, 5419.0], [48.8, 5423.0], [48.9, 5428.0], [49.0, 5429.0], [49.1, 5429.0], [49.2, 5430.0], [49.3, 5434.0], [49.4, 5437.0], [49.5, 5437.0], [49.6, 5438.0], [49.7, 5439.0], [49.8, 5440.0], [49.9, 5440.0], [50.0, 5440.0], [50.1, 5441.0], [50.2, 5441.0], [50.3, 5443.0], [50.4, 5445.0], [50.5, 5446.0], [50.6, 5446.0], [50.7, 5447.0], [50.8, 5448.0], [50.9, 5459.0], [51.0, 5459.0], [51.1, 5461.0], [51.2, 5463.0], [51.3, 5463.0], [51.4, 5463.0], [51.5, 5468.0], [51.6, 5469.0], [51.7, 5469.0], [51.8, 5470.0], [51.9, 5478.0], [52.0, 5479.0], [52.1, 5479.0], [52.2, 5482.0], [52.3, 5484.0], [52.4, 5487.0], [52.5, 5487.0], [52.6, 5488.0], [52.7, 5489.0], [52.8, 5497.0], [52.9, 5497.0], [53.0, 5498.0], [53.1, 5510.0], [53.2, 5511.0], [53.3, 5511.0], [53.4, 5517.0], [53.5, 5519.0], [53.6, 5519.0], [53.7, 5519.0], [53.8, 5520.0], [53.9, 5522.0], [54.0, 5522.0], [54.1, 5523.0], [54.2, 5525.0], [54.3, 5526.0], [54.4, 5526.0], [54.5, 5528.0], [54.6, 5530.0], [54.7, 5537.0], [54.8, 5537.0], [54.9, 5539.0], [55.0, 5540.0], [55.1, 5540.0], [55.2, 5540.0], [55.3, 5550.0], [55.4, 5550.0], [55.5, 5550.0], [55.6, 5551.0], [55.7, 5552.0], [55.8, 5563.0], [55.9, 5563.0], [56.0, 5565.0], [56.1, 5565.0], [56.2, 5567.0], [56.3, 5567.0], [56.4, 5574.0], [56.5, 5574.0], [56.6, 5574.0], [56.7, 5574.0], [56.8, 5575.0], [56.9, 5576.0], [57.0, 5576.0], [57.1, 5584.0], [57.2, 5587.0], [57.3, 5594.0], [57.4, 5594.0], [57.5, 5597.0], [57.6, 5600.0], [57.7, 5603.0], [57.8, 5603.0], [57.9, 5603.0], [58.0, 5605.0], [58.1, 5607.0], [58.2, 5607.0], [58.3, 5611.0], [58.4, 5619.0], [58.5, 5619.0], [58.6, 5620.0], [58.7, 5621.0], [58.8, 5625.0], [58.9, 5625.0], [59.0, 5626.0], [59.1, 5628.0], [59.2, 5631.0], [59.3, 5631.0], [59.4, 5642.0], [59.5, 5644.0], [59.6, 5648.0], [59.7, 5648.0], [59.8, 5649.0], [59.9, 5650.0], [60.0, 5651.0], [60.1, 5651.0], [60.2, 5653.0], [60.3, 5653.0], [60.4, 5653.0], [60.5, 5655.0], [60.6, 5656.0], [60.7, 5656.0], [60.8, 5656.0], [60.9, 5661.0], [61.0, 5663.0], [61.1, 5663.0], [61.2, 5663.0], [61.3, 5665.0], [61.4, 5669.0], [61.5, 5672.0], [61.6, 5672.0], [61.7, 5676.0], [61.8, 5682.0], [61.9, 5682.0], [62.0, 5682.0], [62.1, 5687.0], [62.2, 5691.0], [62.3, 5691.0], [62.4, 5694.0], [62.5, 5694.0], [62.6, 5699.0], [62.7, 5699.0], [62.8, 5705.0], [62.9, 5706.0], [63.0, 5716.0], [63.1, 5716.0], [63.2, 5718.0], [63.3, 5719.0], [63.4, 5719.0], [63.5, 5725.0], [63.6, 5728.0], [63.7, 5728.0], [63.8, 5728.0], [63.9, 5733.0], [64.0, 5736.0], [64.1, 5736.0], [64.2, 5736.0], [64.3, 5739.0], [64.4, 5741.0], [64.5, 5742.0], [64.6, 5742.0], [64.7, 5746.0], [64.8, 5746.0], [64.9, 5747.0], [65.0, 5747.0], [65.1, 5751.0], [65.2, 5752.0], [65.3, 5752.0], [65.4, 5755.0], [65.5, 5755.0], [65.6, 5757.0], [65.7, 5757.0], [65.8, 5759.0], [65.9, 5759.0], [66.0, 5761.0], [66.1, 5761.0], [66.2, 5772.0], [66.3, 5781.0], [66.4, 5782.0], [66.5, 5782.0], [66.6, 5787.0], [66.7, 5788.0], [66.8, 5788.0], [66.9, 5789.0], [67.0, 5793.0], [67.1, 5794.0], [67.2, 5794.0], [67.3, 5797.0], [67.4, 5798.0], [67.5, 5804.0], [67.6, 5804.0], [67.7, 5808.0], [67.8, 5813.0], [67.9, 5814.0], [68.0, 5814.0], [68.1, 5814.0], [68.2, 5817.0], [68.3, 5825.0], [68.4, 5825.0], [68.5, 5829.0], [68.6, 5838.0], [68.7, 5838.0], [68.8, 5845.0], [68.9, 5846.0], [69.0, 5850.0], [69.1, 5850.0], [69.2, 5854.0], [69.3, 5854.0], [69.4, 5858.0], [69.5, 5858.0], [69.6, 5859.0], [69.7, 5864.0], [69.8, 5874.0], [69.9, 5874.0], [70.0, 5875.0], [70.1, 5880.0], [70.2, 5880.0], [70.3, 5880.0], [70.4, 5882.0], [70.5, 5884.0], [70.6, 5884.0], [70.7, 5888.0], [70.8, 5890.0], [70.9, 5892.0], [71.0, 5892.0], [71.1, 5893.0], [71.2, 5898.0], [71.3, 5899.0], [71.4, 5899.0], [71.5, 5900.0], [71.6, 5901.0], [71.7, 5901.0], [71.8, 5905.0], [71.9, 5909.0], [72.0, 5911.0], [72.1, 5911.0], [72.2, 5912.0], [72.3, 5914.0], [72.4, 5915.0], [72.5, 5915.0], [72.6, 5916.0], [72.7, 5919.0], [72.8, 5921.0], [72.9, 5921.0], [73.0, 5923.0], [73.1, 5926.0], [73.2, 5931.0], [73.3, 5931.0], [73.4, 5931.0], [73.5, 5933.0], [73.6, 5933.0], [73.7, 5935.0], [73.8, 5937.0], [73.9, 5938.0], [74.0, 5938.0], [74.1, 5939.0], [74.2, 5939.0], [74.3, 5940.0], [74.4, 5940.0], [74.5, 5940.0], [74.6, 5941.0], [74.7, 5942.0], [74.8, 5942.0], [74.9, 5942.0], [75.0, 5946.0], [75.1, 5946.0], [75.2, 5953.0], [75.3, 5957.0], [75.4, 5958.0], [75.5, 5958.0], [75.6, 5959.0], [75.7, 5961.0], [75.8, 5962.0], [75.9, 5962.0], [76.0, 5971.0], [76.1, 5974.0], [76.2, 5976.0], [76.3, 5976.0], [76.4, 5979.0], [76.5, 5980.0], [76.6, 5982.0], [76.7, 5982.0], [76.8, 5982.0], [76.9, 5983.0], [77.0, 5983.0], [77.1, 5986.0], [77.2, 5988.0], [77.3, 5991.0], [77.4, 5991.0], [77.5, 5998.0], [77.6, 5999.0], [77.7, 6001.0], [77.8, 6001.0], [77.9, 6004.0], [78.0, 6005.0], [78.1, 6005.0], [78.2, 6005.0], [78.3, 6005.0], [78.4, 6006.0], [78.5, 6006.0], [78.6, 6008.0], [78.7, 6010.0], [78.8, 6012.0], [78.9, 6012.0], [79.0, 6014.0], [79.1, 6015.0], [79.2, 6019.0], [79.3, 6019.0], [79.4, 6025.0], [79.5, 6028.0], [79.6, 6029.0], [79.7, 6029.0], [79.8, 6035.0], [79.9, 6035.0], [80.0, 6036.0], [80.1, 6036.0], [80.2, 6040.0], [80.3, 6040.0], [80.4, 6040.0], [80.5, 6046.0], [80.6, 6052.0], [80.7, 6053.0], [80.8, 6053.0], [80.9, 6062.0], [81.0, 6064.0], [81.1, 6072.0], [81.2, 6072.0], [81.3, 6072.0], [81.4, 6081.0], [81.5, 6085.0], [81.6, 6085.0], [81.7, 6085.0], [81.8, 6087.0], [81.9, 6087.0], [82.0, 6088.0], [82.1, 6090.0], [82.2, 6098.0], [82.3, 6098.0], [82.4, 6098.0], [82.5, 6101.0], [82.6, 6105.0], [82.7, 6105.0], [82.8, 6107.0], [82.9, 6113.0], [83.0, 6113.0], [83.1, 6113.0], [83.2, 6126.0], [83.3, 6133.0], [83.4, 6133.0], [83.5, 6134.0], [83.6, 6137.0], [83.7, 6138.0], [83.8, 6138.0], [83.9, 6139.0], [84.0, 6141.0], [84.1, 6154.0], [84.2, 6154.0], [84.3, 6175.0], [84.4, 6188.0], [84.5, 6188.0], [84.6, 6188.0], [84.7, 6204.0], [84.8, 6204.0], [84.9, 6206.0], [85.0, 6206.0], [85.1, 6210.0], [85.2, 6210.0], [85.3, 6210.0], [85.4, 6212.0], [85.5, 6216.0], [85.6, 6227.0], [85.7, 6227.0], [85.8, 6231.0], [85.9, 6232.0], [86.0, 6237.0], [86.1, 6237.0], [86.2, 6239.0], [86.3, 6243.0], [86.4, 6253.0], [86.5, 6253.0], [86.6, 6254.0], [86.7, 6270.0], [86.8, 6270.0], [86.9, 6276.0], [87.0, 6287.0], [87.1, 6290.0], [87.2, 6290.0], [87.3, 6291.0], [87.4, 6298.0], [87.5, 6300.0], [87.6, 6300.0], [87.7, 6313.0], [87.8, 6319.0], [87.9, 6331.0], [88.0, 6331.0], [88.1, 6367.0], [88.2, 6377.0], [88.3, 6381.0], [88.4, 6381.0], [88.5, 6439.0], [88.6, 6441.0], [88.7, 6441.0], [88.8, 6442.0], [88.9, 6470.0], [89.0, 6516.0], [89.1, 6516.0], [89.2, 6523.0], [89.3, 6533.0], [89.4, 6541.0], [89.5, 6541.0], [89.6, 6551.0], [89.7, 6573.0], [89.8, 6606.0], [89.9, 6606.0], [90.0, 6608.0], [90.1, 6608.0], [90.2, 6608.0], [90.3, 6635.0], [90.4, 6638.0], [90.5, 6652.0], [90.6, 6652.0], [90.7, 6771.0], [90.8, 6787.0], [90.9, 6802.0], [91.0, 6802.0], [91.1, 6849.0], [91.2, 6906.0], [91.3, 6936.0], [91.4, 6936.0], [91.5, 6997.0], [91.6, 7054.0], [91.7, 7054.0], [91.8, 7059.0], [91.9, 7089.0], [92.0, 7140.0], [92.1, 7140.0], [92.2, 7155.0], [92.3, 7241.0], [92.4, 7274.0], [92.5, 7274.0], [92.6, 7276.0], [92.7, 7286.0], [92.8, 7343.0], [92.9, 7343.0], [93.0, 7377.0], [93.1, 7382.0], [93.2, 7390.0], [93.3, 7390.0], [93.4, 7411.0], [93.5, 7437.0], [93.6, 7437.0], [93.7, 7493.0], [93.8, 7496.0], [93.9, 7551.0], [94.0, 7551.0], [94.1, 7552.0], [94.2, 7569.0], [94.3, 7588.0], [94.4, 7588.0], [94.5, 7598.0], [94.6, 7655.0], [94.7, 7675.0], [94.8, 7675.0], [94.9, 7687.0], [95.0, 7694.0], [95.1, 7694.0], [95.2, 7715.0], [95.3, 7725.0], [95.4, 7725.0], [95.5, 7725.0], [95.6, 7728.0], [95.7, 7730.0], [95.8, 7735.0], [95.9, 7735.0], [96.0, 7740.0], [96.1, 7747.0], [96.2, 7770.0], [96.3, 7770.0], [96.4, 7784.0], [96.5, 7792.0], [96.6, 7793.0], [96.7, 7793.0], [96.8, 7812.0], [96.9, 7841.0], [97.0, 7841.0], [97.1, 7873.0], [97.2, 7892.0], [97.3, 7893.0], [97.4, 7893.0], [97.5, 7903.0], [97.6, 7933.0], [97.7, 7973.0], [97.8, 7973.0], [97.9, 8007.0], [98.0, 8067.0], [98.1, 8070.0], [98.2, 8070.0], [98.3, 8093.0], [98.4, 8118.0], [98.5, 8118.0], [98.6, 8137.0], [98.7, 8154.0], [98.8, 8162.0], [98.9, 8162.0], [99.0, 8285.0], [99.1, 8292.0], [99.2, 8327.0], [99.3, 8327.0], [99.4, 8339.0], [99.5, 8512.0], [99.6, 8649.0], [99.7, 8649.0], [99.8, 8765.0], [99.9, 8768.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 46.0, "series": [{"data": [[2300.0, 1.0], [2600.0, 2.0], [2800.0, 3.0], [2900.0, 2.0], [3000.0, 8.0], [3100.0, 7.0], [3300.0, 10.0], [3200.0, 10.0], [3400.0, 5.0], [3500.0, 13.0], [3700.0, 20.0], [3600.0, 22.0], [3800.0, 10.0], [3900.0, 8.0], [4000.0, 18.0], [4100.0, 12.0], [4200.0, 19.0], [4300.0, 14.0], [4400.0, 12.0], [4600.0, 12.0], [4500.0, 21.0], [4800.0, 12.0], [4700.0, 12.0], [4900.0, 18.0], [5000.0, 19.0], [5100.0, 10.0], [5200.0, 17.0], [5300.0, 32.0], [5600.0, 38.0], [5400.0, 41.0], [5500.0, 33.0], [5700.0, 35.0], [5800.0, 29.0], [6100.0, 16.0], [5900.0, 46.0], [6000.0, 35.0], [6200.0, 21.0], [6300.0, 7.0], [6500.0, 6.0], [6400.0, 4.0], [6600.0, 6.0], [6900.0, 3.0], [6800.0, 2.0], [6700.0, 2.0], [7000.0, 3.0], [7100.0, 2.0], [7400.0, 4.0], [7200.0, 4.0], [7300.0, 4.0], [7600.0, 4.0], [7500.0, 5.0], [7800.0, 5.0], [7700.0, 12.0], [7900.0, 3.0], [8100.0, 4.0], [8000.0, 4.0], [8200.0, 2.0], [8300.0, 2.0], [8600.0, 1.0], [8700.0, 2.0], [8500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.507462686567163, "minX": 1.60224144E12, "maxY": 12.0, "series": [{"data": [[1.6022415E12, 12.0], [1.60224162E12, 12.0], [1.60224144E12, 12.0], [1.60224174E12, 11.507462686567163], [1.60224156E12, 12.0], [1.60224168E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3253.0, "minX": 1.0, "maxY": 5317.189226519338, "series": [{"data": [[8.0, 3680.0], [4.0, 3736.0], [2.0, 3710.0], [1.0, 4091.0], [9.0, 3669.0], [10.0, 3253.0], [5.0, 3753.0], [11.0, 3264.0], [12.0, 5317.189226519338], [6.0, 3689.0], [3.0, 3722.0], [7.0, 3694.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5292.38911564626]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 537.5, "minX": 1.60224144E12, "maxY": 371435.1666666667, "series": [{"data": [[1.6022415E12, 293562.5833333333], [1.60224162E12, 371435.1666666667], [1.60224144E12, 298788.86666666664], [1.60224174E12, 275602.18333333335], [1.60224156E12, 301788.75], [1.60224168E12, 294602.81666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6022415E12, 907.9833333333333], [1.60224162E12, 1026.8166666666666], [1.60224144E12, 537.5], [1.60224174E12, 997.7166666666667], [1.60224156E12, 1115.1], [1.60224168E12, 937.9166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4708.955223880595, "minX": 1.60224144E12, "maxY": 6064.983333333331, "series": [{"data": [[1.6022415E12, 6064.983333333331], [1.60224162E12, 5279.62773722628], [1.60224144E12, 5329.760563380281], [1.60224174E12, 4708.955223880595], [1.60224156E12, 4834.570469798657], [1.60224168E12, 5718.024193548386]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4708.029850746266, "minX": 1.60224144E12, "maxY": 6063.866666666669, "series": [{"data": [[1.6022415E12, 6063.866666666669], [1.60224162E12, 5278.379562043797], [1.60224144E12, 5328.2535211267605], [1.60224174E12, 4708.029850746266], [1.60224156E12, 4833.550335570469], [1.60224168E12, 5716.862903225808]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.09701492537313432, "minX": 1.60224144E12, "maxY": 2.126760563380282, "series": [{"data": [[1.6022415E12, 0.14166666666666666], [1.60224162E12, 0.11678832116788321], [1.60224144E12, 2.126760563380282], [1.60224174E12, 0.09701492537313432], [1.60224156E12, 0.10738255033557048], [1.60224168E12, 0.11290322580645157]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2347.0, "minX": 1.60224144E12, "maxY": 8768.0, "series": [{"data": [[1.6022415E12, 8768.0], [1.60224162E12, 7973.0], [1.60224144E12, 8649.0], [1.60224174E12, 7276.0], [1.60224156E12, 6313.0], [1.60224168E12, 6276.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6022415E12, 4318.872992585898], [1.60224162E12, 2861.11399944067], [1.60224144E12, 2347.0], [1.60224174E12, 3158.1699987769125], [1.60224156E12, 2674.6999999284744], [1.60224168E12, 4788.124998062849]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6022415E12, 4346.8603029656415], [1.60224162E12, 2863.225400223732], [1.60224144E12, 2347.0], [1.60224174E12, 3162.7870004892347], [1.60224156E12, 2674.9700000286102], [1.60224168E12, 4795.43750077486]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6022415E12, 4334.421496292949], [1.60224162E12, 2862.286999720335], [1.60224144E12, 2347.0], [1.60224174E12, 3160.7349993884563], [1.60224156E12, 2674.849999964237], [1.60224168E12, 4792.1874990314245]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6022415E12, 4296.0], [1.60224162E12, 2857.0], [1.60224144E12, 2347.0], [1.60224174E12, 3150.0], [1.60224156E12, 2674.0], [1.60224168E12, 4780.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6022415E12, 5907.5], [1.60224162E12, 4943.0], [1.60224144E12, 4583.0], [1.60224174E12, 4886.5], [1.60224156E12, 4968.0], [1.60224168E12, 5746.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3874.0, "minX": 1.0, "maxY": 5905.0, "series": [{"data": [[2.0, 5696.5], [1.0, 5905.0], [4.0, 3874.0], [5.0, 4175.0], [3.0, 5287.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3874.0, "minX": 1.0, "maxY": 5903.0, "series": [{"data": [[2.0, 5696.0], [1.0, 5903.0], [4.0, 3874.0], [5.0, 4175.0], [3.0, 5287.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.60224144E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.6022415E12, 2.0], [1.60224162E12, 2.283333333333333], [1.60224144E12, 1.3833333333333333], [1.60224174E12, 2.033333333333333], [1.60224156E12, 2.4833333333333334], [1.60224168E12, 2.066666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224174E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60224144E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.6022415E12, 2.0], [1.60224162E12, 2.283333333333333], [1.60224144E12, 1.1833333333333333], [1.60224174E12, 2.2333333333333334], [1.60224156E12, 2.4833333333333334], [1.60224168E12, 2.066666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60224174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60224144E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.6022415E12, 2.0], [1.60224162E12, 2.283333333333333], [1.60224144E12, 1.1833333333333333], [1.60224174E12, 2.2333333333333334], [1.60224156E12, 2.4833333333333334], [1.60224168E12, 2.066666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.60224144E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.6022415E12, 2.0], [1.60224162E12, 2.283333333333333], [1.60224144E12, 1.1833333333333333], [1.60224174E12, 2.2333333333333334], [1.60224156E12, 2.4833333333333334], [1.60224168E12, 2.066666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60224174E12, "title": "Total Transactions Per Second"}},
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

