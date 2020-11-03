# QGIS Benchmark summary compare-bigfile-settings (20201103-131313)


compare the effect of different QGIS settings with big file size in QGIS 3.10

_run completed in 00h 27m 31s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-bigfile-settings_20201103-131313_plot.html)

## Summary
| name                                   | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-hugecache              | Global  |                182.3 | +0.0%                        |         1357.9 | +0.5%                  |         66158.5 | +1.5%                   |         8155 |        77547 |             13.1 |            72 |            0 |     4932.4 |    2994.4  |     2776.3 |      41.2 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile                        | Global  |                182.5 | +0.1%                        |         1351.3 | +0.0%                  |         65840   | +1.1%                   |         7568 |        76786 |             13.1 |            72 |            0 |     5064   |    3011.17 |     2745.4 |      35.4 |   14.5333 |      12.5 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |                182.5 | +0.1%                        |         1352.6 | +0.1%                  |         65820.5 | +1.0%                   |         7927 |        77035 |             13.1 |            72 |            0 |     5025.8 |    2992.1  |     2779.4 |      44   |   14.4    |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |                182.5 | +0.1%                        |         1353.8 | +0.2%                  |         65178.5 | +0.0%                   |        10010 |        77018 |             13.1 |            72 |            0 |     4860.8 |    2995.93 |     2768.8 |      35.7 |   14.4667 |      12.3 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |                183   | +0.4%                        |         1353.9 | +0.2%                  |         65154   | +0.0%                   |        10386 |        77135 |             13.1 |            72 |            0 |     4947.9 |    3003.03 |     2774.5 |      45.6 |   14.5    |      12.5 |          0 |
| qgis310-bigfile-bigcache               | Global  |                183.5 | +0.7%                        |         1365.5 | +1.1%                  |         65979   | +1.3%                   |         7421 |        78141 |             13.1 |            72 |            0 |     5081.9 |    2991.17 |     2746.9 |      44.1 |   14.5333 |      12.4 |          0 |

## Aggregated
| name                                                  | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix |                182.3 | +0.0%                        |         1357.9 | +0.5%                  |         66158.5 | +1.5%                   |         8155 |        77547 |             13.1 |            72 |            0 |     4932.4 |    2994.4  |     2776.3 |      41.2 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix |                182.5 | +0.1%                        |         1351.3 | +0.0%                  |         65840   | +1.1%                   |         7568 |        76786 |             13.1 |            72 |            0 |     5064   |    3011.17 |     2745.4 |      35.4 |   14.5333 |      12.5 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix |                182.5 | +0.1%                        |         1352.6 | +0.1%                  |         65820.5 | +1.0%                   |         7927 |        77035 |             13.1 |            72 |            0 |     5025.8 |    2992.1  |     2779.4 |      44   |   14.4    |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix |                182.5 | +0.1%                        |         1353.8 | +0.2%                  |         65178.5 | +0.0%                   |        10010 |        77018 |             13.1 |            72 |            0 |     4860.8 |    2995.93 |     2768.8 |      35.7 |   14.4667 |      12.3 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix |                183   | +0.4%                        |         1353.9 | +0.2%                  |         65154   | +0.0%                   |        10386 |        77135 |             13.1 |            72 |            0 |     4947.9 |    3003.03 |     2774.5 |      45.6 |   14.5    |      12.5 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix |                183.5 | +0.7%                        |         1365.5 | +1.1%                  |         65979   | +1.3%                   |         7421 |        78141 |             13.1 |            72 |            0 |     5081.9 |    2991.17 |     2746.9 |      44.1 |   14.5333 |      12.4 |          0 |

## Detail
| name                                                                                                                                                                                                                | group                 |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)     | somap_fix > av_f.txt  |                 67.4 | +0.0%                        |          513.9 | +0.3%                  |         26724.5 | +0.0%                   |            22 |            0 |          0 |       23357.6 |         3279 |        31016 |       30976.6 |       31010.9 |         31016 |     0.354028 |                46.4117 |           0.145678 |              2.8 |     3771   |     3034.7 |     2798.6 |      44   |      15   |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                                 | somap_fix > av_f.txt  |                 67.5 | +0.1%                        |          512.5 | +0.0%                  |         26712   | +0.0%                   |            22 |            0 |          0 |       23293.3 |         3479 |        30772 |       30654.6 |       30760.6 |         30772 |     0.353442 |                46.3349 |           0.145437 |              2.8 |     3672.5 |     3050.7 |     2754.5 |      35.4 |      15.1 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-hugecache/somap310_fix/av_f.txt/dashboard/index.html)                             | somap_fix > av_f.txt  |                 67.6 | +0.3%                        |          514.6 | +0.4%                  |         26869   | +0.6%                   |            22 |            0 |          0 |       23390.3 |         3282 |        31219 |       31144.8 |       31208.5 |         31219 |     0.352915 |                46.2658 |           0.14522  |              2.8 |     3739.8 |     3039.2 |     2790.6 |      32.1 |      15.1 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-bigcache/somap310_fix/av_f.txt/dashboard/index.html)                               | somap_fix > av_f.txt  |                 67.7 | +0.4%                        |          515.4 | +0.6%                  |         26814   | +0.4%                   |            22 |            0 |          0 |       23425.1 |         3409 |        30986 |       30895.2 |       30982.1 |         30986 |     0.352513 |                46.2132 |           0.145055 |              2.8 |     3714.9 |     3023.1 |     2746.9 |      44.1 |      15.2 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)                       | somap_fix > av_f.txt  |                 68   | +0.9%                        |          515.5 | +0.6%                  |         26814.5 | +0.4%                   |            22 |            0 |          0 |       23429.6 |         3507 |        31320 |       30988.4 |       31283.8 |         31320 |     0.351814 |                46.1215 |           0.144767 |              2.8 |     3828.8 |     3056.6 |     2795.6 |      45.6 |      15.1 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 68.2 | +1.2%                        |          517.5 | +1.0%                  |         27031   | +1.2%                   |            22 |            0 |          0 |       23524.9 |         3429 |        31293 |       31160.4 |       31276.8 |         31293 |     0.349395 |                45.8044 |           0.143772 |              2.8 |     3807.8 |     3051   |     2791.6 |      35.7 |      15   |      12.3 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 56.6 | +0.0%                        |          393.7 | +0.3%                  |         20913   | +0.0%                   |            20 |            0 |          0 |       19684.3 |         4513 |        28002 |       27802.2 |       27992.5 |         28002 |     0.388833 |               189.362  |           0.158647 |              9.5 |     4860.8 |     3143.7 |     2880.4 |      32.9 |      14.6 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt |                 56.7 | +0.2%                        |          395.2 | +0.6%                  |         21926   | +4.8%                   |            20 |            0 |          0 |       19759.8 |         2872 |        28140 |       27822.4 |       28124.2 |         28140 |     0.388267 |               189.087  |           0.158416 |              9.5 |     4932.4 |     3148.6 |     2874.5 |      41.2 |      14.5 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                             | somap_fix > av_sw.txt |                 56.8 | +0.4%                        |          392.7 | +0.0%                  |         21576.5 | +3.2%                   |            20 |            0 |          0 |       19633.9 |         2017 |        28104 |       28070.8 |       28102.6 |         28104 |     0.389734 |               189.801  |           0.159015 |              9.5 |     5081.9 |     3156   |     2851   |      29.7 |      14.7 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                               | somap_fix > av_sw.txt |                 57.1 | +0.9%                        |          395.6 | +0.7%                  |         21772   | +4.1%                   |            20 |            0 |          0 |       19780   |         2064 |        28320 |       28219.2 |       28315.2 |         28320 |     0.38675  |               188.348  |           0.157797 |              9.5 |     5064   |     3182.2 |     2889.2 |      33.9 |      14.6 |      12.6 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                     | somap_fix > av_sw.txt |                 57.5 | +1.6%                        |          399.3 | +1.7%                  |         21196   | +1.4%                   |            20 |            0 |          0 |       19963.6 |         4832 |        28274 |       28116.8 |       28266.5 |         28274 |     0.384578 |               187.29   |           0.156911 |              9.5 |     4947.9 |     3155.2 |     2905.5 |      40.2 |      14.6 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)   | somap_fix > av_sw.txt |                 57.5 | +1.6%                        |          397.5 | +1.2%                  |         21940   | +4.9%                   |            20 |            0 |          0 |       19875   |         2499 |        28591 |       28437.6 |       28583.7 |         28591 |     0.382885 |               186.466  |           0.15622  |              9.5 |     5025.8 |     3148.7 |     2887.5 |      35.8 |      14.6 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                           | somap_fix > lk.txt    |                 57.5 | +0.0%                        |          439.2 | +0.0%                  |         17143.5 | +0.0%                   |            30 |            0 |          0 |       14640.7 |         2047 |        17541 |       17451   |       17503.6 |         17541 |     0.574251 |                15.5661 |           0.234822 |              0.8 |     2824.4 |     2797.3 |     2774.5 |      26.7 |      13.8 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)         | somap_fix > lk.txt    |                 57.6 | +0.2%                        |          441.2 | +0.5%                  |         17156   | +0.1%                   |            30 |            0 |          0 |       14708   |         2149 |        17428 |       17375   |       17427.5 |         17428 |     0.572366 |                15.515  |           0.234052 |              0.8 |     2818.1 |     2792.9 |     2779.4 |      30.6 |      13.6 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 57.7 | +0.3%                        |          442.6 | +0.8%                  |         17234.5 | +0.5%                   |            30 |            0 |          0 |       14751.7 |         2068 |        17723 |       17573.2 |       17646.5 |         17723 |     0.57323  |                15.5385 |           0.234405 |              0.8 |     2816.9 |     2793.1 |     2768.8 |      27.9 |      13.8 |      12.4 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                     | somap_fix > lk.txt    |                 57.9 | +0.7%                        |          443.3 | +0.9%                  |         17356   | +1.2%                   |            30 |            0 |          0 |       14775.3 |         2025 |        17694 |       17665.2 |       17686.3 |         17694 |     0.570689 |                15.4696 |           0.233366 |              0.8 |     2821.3 |     2800.6 |     2745.4 |      35.3 |      13.9 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt    |                 58   | +0.9%                        |          448.1 | +2.0%                  |         17363.5 | +1.3%                   |            30 |            0 |          0 |       14938   |         2001 |        18188 |       18016.1 |       18120.9 |         18188 |     0.568494 |                15.4101 |           0.232468 |              0.8 |     2817.6 |     2795.4 |     2776.3 |      29.9 |      13.7 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-131313/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                   | somap_fix > lk.txt    |                 59   | +2.6%                        |          457.5 | +4.2%                  |         17588.5 | +2.6%                   |            30 |            0 |          0 |       15250.1 |         1995 |        19051 |       18856.6 |       19027.9 |         19051 |     0.558129 |                15.1291 |           0.22823  |              0.8 |     2817.5 |     2794.4 |     2781.9 |      42.5 |      13.7 |      12.5 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare the effect of different QGIS settings with big file size in QGIS 3.10'

test-cases:

  qgis310-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis310-bigfile-bigcache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'

  qgis310-bigfile-hugecache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'

  qgis310-bigfile-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-bigcache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-hugecache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_MAX_CACHE_LAYERS: '2000'

```
### parsed test configurations

```
description: compare the effect of different QGIS settings with big file size in QGIS
  3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx

```