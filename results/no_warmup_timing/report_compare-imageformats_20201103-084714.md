# QGIS Benchmark summary compare-imageformats (20201103-084714)


compare jpeg/png vs webp on QGIS 3.16 servers using the same settings

_run completed in 00h 02m 19s_

_Sample size per configuration 102_
## Summary plot
An interactive summary plot can be found [here](report_compare-imageformats_20201103-084714_plot.html)

## Summary
| name         | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-webp | Global  |                 42.2 | +0.0%                        |          144.6 | +0.0%                  |          5883   | +0.0%                   |         1029 |        10097 |              0   |           102 |            0 |     2552.8 |    2354.52 |     2193.3 |      41.6 |    19.8   |      11.1 |          0 |
| qgis316-jpeg | Global  |                 45.7 | +8.3%                        |          168   | +16.2%                 |          6837.5 | +16.2%                  |         2084 |        11593 |             24.5 |           102 |            0 |     2544.8 |    2339.6  |     2173.3 |      38.3 |    22.175 |      10.8 |          0 |

## Aggregated
| name                                       | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-webp > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 12.7 | +0.0%                        |           54.3 | +0.0%                  |          2874   | +0.0%                   |          271 |         3887 |              0   |            22 |            0 |     2552.8 |     2374.9 |     2193.3 |      41.6 |      27.8 |      21.1 |          0 |
| qgis316-jpeg > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 13.3 | +4.7%                        |           58.5 | +7.8%                  |          3044.5 | +5.9%                   |          304 |         4117 |              2.8 |            22 |            0 |     2544.8 |     2392.9 |     2250.3 |      34.6 |      26.6 |      22.3 |          0 |
| qgis316-webp > somap316_grundplanav_sw     | somap_grundplanav_sw     |                 11.1 | +0.0%                        |           34.3 | +0.0%                  |          1086   | +0.0%                   |           78 |         3558 |              0   |            20 |            0 |     2510   |     2358.9 |     2254.6 |      34   |      22.5 |      15.8 |          0 |
| qgis316-jpeg > somap316_grundplanav_sw     | somap_grundplanav_sw     |                 12.6 | +13.5%                       |           44.3 | +29.2%                 |          1530.5 | +40.9%                  |         1015 |         4315 |              6.1 |            20 |            0 |     2376.1 |     2309.3 |     2244.1 |      30.5 |      21.6 |      15.6 |          0 |
| qgis316-webp > somap316_lk                 | somap_lk                 |                  6.8 | +0.0%                        |            6.8 | +0.0%                  |           228   | +0.0%                   |          146 |          323 |              0   |            30 |            0 |     2275.6 |     2275.6 |     2275.6 |      11.1 |      11.1 |      11.1 |          0 |
| qgis316-jpeg > somap316_lk                 | somap_lk                 |                  7.4 | +8.8%                        |            9.3 | +37.4%                 |           320   | +40.4%                  |          165 |          454 |              0.8 |            30 |            0 |     2271.4 |     2222.3 |     2173.3 |      38.3 |      24.5 |      10.8 |          0 |
| qgis316-webp > somap316_orthofoto          | somap_orthofoto          |                 11.6 | +0.0%                        |           49.2 | +0.0%                  |          1695   | +0.0%                   |          534 |         2329 |              0   |            30 |            0 |     2486.6 |     2408.7 |     2257.7 |      25.8 |      17.8 |      13.4 |          0 |
| qgis316-jpeg > somap316_orthofoto          | somap_orthofoto          |                 12.4 | +6.9%                        |           55.9 | +13.5%                 |          1942.5 | +14.6%                  |          600 |         2707 |             14.8 |            30 |            0 |     2494   |     2433.9 |     2348   |      25.2 |      16   |      13.4 |          0 |

## Detail
| name                                                                                                                                                                                              | group                                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-jpeg > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-imageformats/20201103-084714/qgis316-jpeg/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt      |                 13.3 | +0.0%                        |           58.5 | +0.0%                  |          3044.5 | +0.0%                   |            22 |            0 |          0 |      2659.59  |          304 |         4117 |        4049.3 |       4109.05 |          4117 |      2.96936 |             387.206    |            1.26535 |              2.8 |     2544.8 |     2392.9 |     2250.3 |      34.6 |      26.6 |      22.3 |
| [qgis316-webp > somap316_grundplanav_farbig > av_f_webp.txt](../results/details/compare-imageformats/20201103-084714/qgis316-webp/somap316_grundplanav_farbig/av_f_webp.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_webp.txt |                 12.7 | +0.0%                        |           54.3 | +0.0%                  |          2874   | +0.0%                   |            22 |            0 |          0 |      2468     |          271 |         3887 |        3850   |       3883.25 |          3887 |      3.17552 |               0.564399 |            1.3532  |              0   |     2552.8 |     2374.9 |     2193.3 |      41.6 |      27.8 |      21.1 |
| [qgis316-jpeg > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-imageformats/20201103-084714/qgis316-jpeg/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt         |                 12.6 | +0.0%                        |           44.3 | +0.0%                  |          1530.5 | +0.0%                   |            20 |            0 |          0 |      2217.35  |         1015 |         4315 |        4194.5 |       4309    |          4315 |      3.01432 |             937.554    |            1.26225 |              6.1 |     2376.1 |     2309.3 |     2244.1 |      30.5 |      21.6 |      15.6 |
| [qgis316-webp > somap316_grundplanav_sw > av_sw_webp.txt](../results/details/compare-imageformats/20201103-084714/qgis316-webp/somap316_grundplanav_sw/av_sw_webp.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_webp.txt    |                 11.1 | +0.0%                        |           34.3 | +0.0%                  |          1086   | +0.0%                   |            20 |            0 |          0 |      1716.75  |           78 |         3558 |        3547   |       3557.5  |          3558 |      3.80445 |               0.676182 |            1.59441 |              0   |     2510   |     2358.9 |     2254.6 |      34   |      22.5 |      15.8 |
| [qgis316-jpeg > somap316_lk > lk.txt](../results/details/compare-imageformats/20201103-084714/qgis316-jpeg/somap316_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                        |                  7.4 | +0.0%                        |            9.3 | +0.0%                  |           320   | +0.0%                   |            30 |            0 |          0 |       310.8   |          165 |          454 |         393.3 |        438.05 |           454 |     20.7326  |             561.953    |            8.45769 |              0.8 |     2271.4 |     2222.3 |     2173.3 |      38.3 |      24.5 |      10.8 |
| [qgis316-webp > somap316_lk > lk_webp.txt](../results/details/compare-imageformats/20201103-084714/qgis316-webp/somap316_lk/lk_webp.txt/dashboard/index.html)                                     | somap_lk > lk_webp.txt                   |                  6.8 | +0.0%                        |            6.8 | +0.0%                  |           228   | +0.0%                   |            30 |            0 |          0 |       226.133 |          146 |          323 |         287.8 |        312.55 |           323 |     26.738   |               4.75226  |           10.9076  |              0   |     2275.6 |     2275.6 |     2275.6 |      11.1 |      11.1 |      11.1 |
| [qgis316-jpeg > somap316_orthofoto > orthofotos.txt](../results/details/compare-imageformats/20201103-084714/qgis316-jpeg/somap316_orthofoto/orthofotos.txt/dashboard/index.html)                 | somap_orthofoto > orthofotos.txt         |                 12.4 | +0.0%                        |           55.9 | +0.0%                  |          1942.5 | +0.0%                   |            30 |            0 |          0 |      1861.8   |          600 |         2707 |        2284.6 |       2540.9  |          2707 |      4.60688 |            2333.06     |            1.8474  |             14.8 |     2494   |     2433.9 |     2348   |      25.2 |      16   |      13.4 |
| [qgis316-webp > somap316_orthofoto > orthofotos_webp.txt](../results/details/compare-imageformats/20201103-084714/qgis316-webp/somap316_orthofoto/orthofotos_webp.txt/dashboard/index.html)       | somap_orthofoto > orthofotos_webp.txt    |                 11.6 | +0.0%                        |           49.2 | +0.0%                  |          1695   | +0.0%                   |            30 |            0 |          0 |      1640.5   |          534 |         2329 |        2007.5 |       2178.3  |          2329 |      5.21921 |               0.927632 |            2.09295 |              0   |     2486.6 |     2408.7 |     2257.7 |      25.8 |      17.8 |      13.4 |

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
description: 'compare jpeg/png vs webp on QGIS 3.16 servers using the same settings'
test-cases:
  qgis316-jpeg:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.16'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '6' #QGIS3
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt
      somap316_orthofoto:
        - orthofotos.txt

  qgis316-webp:
    inherit: qgis316-jpeg
    projects:
      somap316_lk:
        - lk_webp.txt
      somap316_grundplanav_farbig:
        - av_f_webp.txt
      somap316_grundplanav_sw:
        - av_sw_webp.txt
      somap316_orthofoto:
        - orthofotos_webp.txt
```
### parsed test configurations

```
description: compare jpeg/png vs webp on QGIS 3.16 servers using the same settings
test-cases:
  qgis316-jpeg:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
      somap316_orthofoto:
      - orthofotos.txt
    template: docker-compose-qgis-3-nginx
  qgis316-webp:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316-jpeg
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_webp.txt
      somap316_grundplanav_sw:
      - av_sw_webp.txt
      somap316_lk:
      - lk_webp.txt
      somap316_orthofoto:
      - orthofotos_webp.txt
    template: docker-compose-qgis-3-nginx

```