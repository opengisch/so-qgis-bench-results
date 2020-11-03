# QGIS Benchmark summary compare-featureinfo (20201103-060458)


compare different version of QGIS servers using the same settings

_run completed in 00h 02m 55s_

_Sample size per configuration 347_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201103-060458_plot.html)

## Summary
| name               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316            | Global  |                 11.3 | +0.0%                        |           23.7 | +0.0%                  |           157   | +62.7%                  |           11 |          294 |              0.5 |           347 |            0 |     6869.4 |    6860.1  |     6850.8 |      34.8 |     33.7  |      32.5 |          0 |
| qgis316-standalone | Global  |                 11.4 | +0.9%                        |           25.6 | +8.0%                  |           158   | +63.7%                  |           11 |          324 |              0.5 |           347 |            0 |     6838.6 |    6828.45 |     6814.1 |      33.9 |     25.45 |      15.3 |          0 |
| qgis218            | Global  |                 15.5 | +37.2%                       |           55.3 | +133.3%                |            96.5 | +0.0%                   |           36 |         6076 |              2.4 |           347 |            0 |     7231   |    7068.2  |     6801.7 |      96.6 |     59.55 |       5.4 |          0 |
| qgis310            | Global  |                 34.7 | +207.1%                      |          251.2 | +959.0%                |          1673   | +1633.7%                |          230 |         1811 |              0.5 |           347 |            0 |     6829.4 |    6807.6  |     6787.8 |      33.5 |     19.7  |      14.9 |          0 |

## Aggregated
| name                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |                  5.9 | +0.0%                        |           16   | +4.8%                  |           110   | +111.5%                 |            4 |          201 |              0.3 |           149 |            0 |     6837.4 |     6829.4 |     6814.1 |      31.4 |      26.3 |      20.3 |          0 |
| qgis316 > somap316_grundplanav_farbig            | somap_grundplanav_farbig |                  6.1 | +3.4%                        |           15.3 | +0.0%                  |           115   | +121.2%                 |            4 |          191 |              0.3 |           149 |            0 |     6869.4 |     6860.1 |     6850.8 |      34.8 |      33.7 |      32.5 |          0 |
| qgis218 > somap218_grundplanav_farbig            | somap_grundplanav_farbig |                  7.9 | +33.9%                       |           30   | +96.5%                 |            52   | +0.0%                   |           25 |         3059 |              2.2 |           149 |            0 |     7231   |     7219   |     7201   |      96.6 |      75.6 |      34.1 |          0 |
| qgis310 > somap310_grundplanav_farbig            | somap_grundplanav_farbig |                 24.8 | +320.3%                      |          198   | +1197.2%               |          1392   | +2576.9%                |          172 |         1477 |              0.3 |           149 |            0 |     6829.4 |     6805.1 |     6787.8 |      33.5 |      19.1 |      14.9 |          0 |
| qgis316 > somap316_lk                            | somap_lk                 |                  5.2 | +0.0%                        |            8.5 | +0.0%                  |            42   | +0.0%                   |            7 |          103 |              0.2 |           198 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |                  5.5 | +5.8%                        |            9.6 | +13.8%                 |            48   | +14.3%                  |            7 |          123 |              0.2 |           198 |            0 |     6838.6 |     6827.5 |     6816.4 |      33.9 |      24.6 |      15.3 |          0 |
| qgis218 > somap218_lk                            | somap_lk                 |                  7.6 | +46.2%                       |           25.3 | +199.7%                |            44.5 | +6.0%                   |           11 |         3017 |              0.2 |           198 |            0 |     7018.7 |     6917.4 |     6801.7 |      86.3 |      43.5 |       5.4 |          0 |
| qgis310 > somap310_lk                            | somap_lk                 |                  9.9 | +90.4%                       |           53.2 | +529.0%                |           281   | +569.0%                 |           58 |          334 |              0.2 |           198 |            0 |     6822.9 |     6810.1 |     6791   |      29.1 |      20.3 |      17.9 |          0 |

## Detail
| name                                                                                                                                                                                                                   | group                                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-standalone > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-060458/qgis316-standalone/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html) | somap_grundplanav_farbig > featureinfo_av.txt |                  5.9 | +0.0%                        |           16   | +4.8%                  |           110   | +111.5%                 |           149 |            0 |          0 |      107.383  |            4 |          201 |         173   |        189    |        200    |      73.9821 |               127.138  |           37.8396  |              0.3 |     6837.4 |     6829.4 |     6814.1 |      31.4 |      26.3 |      20.3 |
| [qgis316 > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-060458/qgis316/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                  6.1 | +3.4%                        |           15.3 | +0.0%                  |           115   | +121.2%                 |           149 |            0 |          0 |      102.443  |            4 |          191 |         157   |        162.5  |        190.5  |      76.6067 |               139.059  |           38.1346  |              0.3 |     6869.4 |     6860.1 |     6850.8 |      34.8 |      33.7 |      32.5 |
| [qgis218 > somap218_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-060458/qgis218/somap218_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                  7.9 | +33.9%                       |           30   | +96.5%                 |            52   | +0.0%                   |           149 |            0 |          0 |      201.309  |           25 |         3059 |         347   |        766    |       3045.5  |      38.9848 |               581.004  |           19.4066  |              2.2 |     7231   |     7219   |     7201   |      96.6 |      75.6 |      34.1 |
| [qgis310 > somap310_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-060458/qgis310/somap310_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                 24.8 | +320.3%                      |          198   | +1197.2%               |          1392   | +2576.9%                |           149 |            0 |          0 |     1328.94   |          172 |         1477 |        1442   |       1455    |       1476    |       7.1676 |                13.0249 |            3.56801 |              0.3 |     6829.4 |     6805.1 |     6787.8 |      33.5 |      19.1 |      14.9 |
| [qgis316 > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-060458/qgis316/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  5.2 | +0.0%                        |            8.5 | +0.0%                  |            42   | +0.0%                   |           198 |            0 |          0 |       42.7172 |            7 |          103 |          61   |         68.05 |        103    |     159.677  |               147.669  |           75.0803  |              0.2 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316-standalone > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-060458/qgis316-standalone/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                 | somap_lk > featureinfo_lk.txt                 |                  5.5 | +5.8%                        |            9.6 | +13.8%                 |            48   | +14.3%                  |           198 |            0 |          0 |       48.6263 |            7 |          123 |          66   |         71.05 |        123    |     150.8    |               124.143  |           72.9677  |              0.2 |     6838.6 |     6827.5 |     6816.4 |      33.9 |      24.6 |      15.3 |
| [qgis218 > somap218_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-060458/qgis218/somap218_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  7.6 | +46.2%                       |           25.3 | +199.7%                |            44.5 | +6.0%                   |           198 |            0 |          0 |      128.015  |           11 |         3017 |         120.5 |        313.15 |       2043.83 |      53.3693 |                58.2774 |           25.0942  |              0.2 |     7018.7 |     6917.4 |     6801.7 |      86.3 |      43.5 |       5.4 |
| [qgis310 > somap310_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-060458/qgis310/somap310_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  9.9 | +90.4%                       |           53.2 | +529.0%                |           281   | +569.0%                 |           198 |            0 |          0 |      268.687  |           58 |          334 |         308   |        321    |        331.03 |      33.9739 |                31.4853 |           15.9745  |              0.2 |     6822.9 |     6810.1 |     6791   |      29.1 |      20.3 |      17.9 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - featureinfo_lk.txt
      somap218_grundplanav_farbig:
        - featureinfo_av.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - featureinfo_lk.txt
      somap310_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - featureinfo_lk.txt
      somap316_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - featureinfo_av.txt
      somap218_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - featureinfo_av.txt
      somap310_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ''
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```