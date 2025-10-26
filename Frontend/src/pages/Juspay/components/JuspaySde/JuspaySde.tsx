import { useState } from "react";
import "./JuspaySde.css";

type LanguageKey = "cpp";
// 2. Define the valid keys for problems/tabs
const languageKeys: LanguageKey[] = ["cpp"];

type TabKey = "maxWeightNode" | "largestSumCycle" | "nearestMeetingCell";

// Use 'type' for mapped object structure definition
type CodeBlock = {
  [key in TabKey]: string;
};

// Use 'type' for mapped object structure definition
type CodeSamples = {
  [key in LanguageKey]: CodeBlock;
};

// Define a type-safe array for iteration

const codeSamples: CodeSamples = {
  cpp: {
    maxWeightNode: `
#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int maxWeightCell(vector<int> &edge)
    {
        int n = edge.size();
        vector<int> nodeWt(n);

        for (int i = 0; i < n; i++)
        {
            if (edge[i] != -1)
                nodeWt[edge[i]] += i;
        }

        int maxWt = INT_MIN, ans;
        for (int i = 0; i < n; i++)
        {
            maxWt = max(maxWt, nodeWt[i]);
        }

        for (int i = 0; i < n; i++)
        {
            if (nodeWt[i] == maxWt)
            {
                ans = i;
            }
        }

        return ans;
    }
};

int main()
{
    Solution obj;
  
        int n;
        cin >> n;
        vector<int> edge(n);
        for (int i = 0; i < n; i++)
        {
            cin >> edge[i];
        }
        int ans = obj.maxWeightCell(edge);
        cout << ans << endl;

    return 0;
}`,
    largestSumCycle: ` 
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    int solve(vector<int> &edge)
    {
        int n = edge.size(), maxCycleSum = 0;
        vector<bool> vis(n, false);

        for (int i = 0; i < n; i++)
        {
            if (!vis[i])
            {

                int index = 0, sum = 0, startingNode = i, runningNode = i;
                unordered_map<int, int> mp;
                vector<pair<int, int>> prefixArr;

                while (runningNode != -1 && !vis[runningNode])
                {
                    mp[runningNode] = sum;
                    sum += runningNode;
                    prefixArr.push_back({runningNode, sum});
                    vis[runningNode] = true;
                    index++;
                    runningNode = edge[runningNode];
                }

                if (runningNode == startingNode)
                {
                    maxCycleSum = max(maxCycleSum, sum);
                }
                else if (runningNode != -1 && mp.count(runningNode))
                {
                    int tempLen = prefixArr[index - 1].second - mp[runningNode];
                    maxCycleSum = max(maxCycleSum, tempLen);
                }
            }
        }

        return maxCycleSum == 0 ? -1 : maxCycleSum;
    }
};

int main()
{
    Solution obj;
        int n;
        cin >> n;
        vector<int> edge(n);
        for (int i = 0; i < n; i++)
        {
            cin >> edge[i];
        }
        int ans = obj.solve(edge);
        cout << ans << endl;
    return 0;
}`,
    nearestMeetingCell: `#include <bits/stdc++.h>
using namespace std;
#define INF INT_MAX

vector<long long> Dijkstra(vector<vector<int>> &adj, int s)
{
    priority_queue<pair<long, long>, vector<pair<long, long>>, greater<pair<long, long>>> pq;
    int v = adj.size();
    vector<long long> ans(v, INF);
    ans[s] = 0;
    pq.push({0, s});
    while (!pq.empty())
    {
        long long dist = pq.top().first;
        int node = pq.top().second;
        pq.pop();
        for (auto i : adj[node])
        {
            if (dist + 1 < ans[i])
            {
                ans[i] = dist + 1;
                pq.push({dist + 1, i});
            }
        }
    }
    return ans;
}

int minimumWeight(int n, vector<int> &edges, int C1, int C2)
{
    vector<vector<int>> graph(n);
    for (int i = 0; i < n; i++)
    {
        if (edges[i] != -1)
            graph[i].push_back(edges[i]);
    }
    vector<long long> A(n, INF), B(n, INF);
    A = Dijkstra(graph, C1);
    B = Dijkstra(graph, C2);
    int node = -1;
    long long dist = INF;
    for (int i = 0; i < n; ++i)
    {
        if (A[i] == INF || B[i] == INF)
            continue;
        if (dist > A[i] + B[i])
        {
            dist = A[i] + B[i];
            node = i;
        }
    }
    return node;
}

int main()
{
        int n;
        cin >> n;

        vector<int> edges(n);
        for (int i = 0; i < n; ++i)
        {
            cin >> edges[i];
        }

        int C1, C2;
        cin >> C1 >> C2;

        int nearestMeetingCell = minimumWeight(n, edges, C1, C2);
        cout << nearestMeetingCell << endl;
    return 0;
}`,
  },
  // java: {
  //   maxWeightNode: `// Java implementation here`,
  //   largestSumCycle: `// Java implementation here`,
  //   nearestMeetingCell: `// Java implementation here`,
  // },
  // python: {
  //   maxWeightNode: `# Python implementation here`,
  //   largestSumCycle: `# Python implementation here`,
  //   nearestMeetingCell: `# Python implementation here`,
  // },
};

const JuspaySde = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("maxWeightNode");
  const [activeLang, setActiveLang] = useState<LanguageKey>("cpp");

  return (
    <div className="juspay-sde">
      <h2>JUSPAY || SDE Intern + PPO</h2>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("maxWeightNode")}
          className={activeTab === "maxWeightNode" ? "active" : ""}
        >
          Maximum Weight Node
        </button>
        <button
          onClick={() => setActiveTab("largestSumCycle")}
          className={activeTab === "largestSumCycle" ? "active" : ""}
        >
          Largest Sum Cycle
        </button>
        <button
          onClick={() => setActiveTab("nearestMeetingCell")}
          className={activeTab === "nearestMeetingCell" ? "active" : ""}
        >
          Nearest Meeting Cell
        </button>
      </div>

      <div className="lang-switch">
               {" "}
        {/* The fix is here: use the strictly typed languageKeys constant */}   
           {" "}
        {languageKeys.map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={activeLang === lang ? "active" : ""}
          >
                        {lang.toUpperCase()}         {" "}
          </button>
        ))}
             {" "}
      </div>

      <div className="problem-description">
        {activeTab === "maxWeightNode" && (
          <div
            className="problem-description"
            style={{
              background: "#ffffff" /* Changed to pure white for crispness */,
              padding: "30px" /* Increased padding */,
              borderRadius: "12px" /* Slightly rounder corners */,
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.08)" /* Added a subtle shadow */,
              lineHeight: "1.7" /* Improved line spacing */,
              fontFamily:
                "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" /* Modern, readable font */,
            }}
          >
            {/* Assuming activeTab is "maxWeightNode" */}
            <div>
              <h1
                style={{
                  color: "#1a73e8" /* A prominent, friendly blue */,
                  borderBottom: "3px solid #e0e0e0" /* Separator line */,
                  paddingBottom: "10px",
                  marginBottom: "20px",
                  fontSize: "24px" /* Slightly larger title */,
                }}
              >
                Problem 1: Maximum Weight Node (Easy)
              </h1>

              <div style={{ marginBottom: "25px" }}>
                <h3 style={{ color: "#333", marginBottom: "10px" }}>
                  📝 Description
                </h3>
                <p>
                  Imagine a maze with <strong>N</strong> cells, indexed from{" "}
                  <code>0</code> to <code>N-1</code>. Each cell is designed with
                  unidirectional doors: it may have **multiple entry points**
                  but at most **one exit**.
                </p>
                <p>
                  You are provided with an array, <code>Edge[]</code>, of{" "}
                  <strong>N</strong> integers. The value <code>Edge[i]</code>{" "}
                  indicates the cell index that can be reached directly from
                  cell <code>i</code> in one step. If cell <code>i</code> has no
                  exit, <code>Edge[i]</code> will be <code>-1</code>.
                </p>
              </div>

              {/* --- Task Section --- */}
              <div style={{ marginBottom: "25px" }}>
                <h3
                  style={{
                    color: "#333",
                    marginTop: "0",
                    marginBottom: "10px",
                  }}
                >
                  🎯 Task
                </h3>
                <p>
                  Your goal is to find the cell with the **maximum weight**.
                </p>
                <p
                  style={{
                    background:
                      "#e8f0fe" /* Light blue background for key definition */,
                    padding: "10px 15px",
                    borderRadius: "6px",
                    borderLeft: "4px solid #1a73e8",
                    fontWeight: "bold",
                  }}
                >
                  The **weight** of a cell is defined as the sum of the **cell
                  indexes** of all cells that point to it (i.e., all its
                  predecessors).
                </p>
                <p>
                  <strong>Tie-breaker:</strong> If multiple cells share the same
                  maximum weight, you must return the cell with the **highest
                  index**.
                </p>
              </div>

              {/* --- Input/Output Sections --- */}
              <div style={{ display: "flex", gap: "30px" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "#333", marginBottom: "10px" }}>
                    📥 Input Format
                  </h3>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      margin: "0",
                      background: "#4d4d45",
                    }}
                  >
                    <li>
                      Line 1: The number of cells, <strong>N</strong>.
                    </li>
                    <li>
                      Line 2: A list of N space-separated integers representing
                      the <code>Edge[]</code> array.
                    </li>
                  </ul>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#666",
                      marginTop: "10px",
                    }}
                  >
                    **Note:** Cells are 0-indexed. An edge value of{" "}
                    <code>-1</code> means no exit from that cell.
                  </p>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "#333", marginBottom: "10px" }}>
                    📤 Output Format
                  </h3>
                  <p>
                    A single integer representing the cell index with the
                    maximum weight.
                  </p>
                </div>
              </div>

              {/* --- Example Section --- */}
              <h2
                style={{
                  color: "#4285f4",
                  marginTop: "30px",
                  borderTop: "1px dashed #ccc",
                  paddingTop: "20px",
                  marginBottom: "15px",
                  fontSize: "20px",
                }}
              >
                Example
              </h2>

              <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ color: "#555", marginBottom: "5px" }}>
                    Sample Input:
                  </h4>
                  <pre
                    style={{
                      background: "rgb(77, 77, 69)",
                      padding: "15px",
                      borderRadius: "8px",
                      overflowX: "auto",
                      fontSize: "14px",
                      fontFamily:
                        "Menlo, Monaco, Consolas, 'Courier New', monospace" /* Monospace font for code */,
                      border: "1px solid #ddd",
                    }}
                  >
                    {`23
4 4 1 4 13 8 8 8 0 8 14 9 15 11 -1 10 15 22 22 22 22 22 21`}
                  </pre>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ color: "#555", marginBottom: "5px" }}>
                    Sample Output:
                  </h4>
                  <pre
                    style={{
                      background: "rgb(76 120 81)" /* Light green for output */,
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontFamily:
                        "Menlo, Monaco, Consolas, 'Courier New', monospace",
                      border: "1px solid #c3e8c9",
                    }}
                  >
                    22
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "largestSumCycle" && (
          <div
            className="problem-description"
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              lineHeight: "1.7",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            <div>
              <h1
                style={{
                  color:
                    "#d93025" /* A prominent red for Medium-Hard difficulty */,
                  borderBottom: "3px solid #f9a825" /* Gold/Orange separator */,
                  paddingBottom: "10px",
                  marginBottom: "20px",
                  fontSize: "26px",
                }}
              >
                Problem 2: Largest Sum Cycle (Medium-Hard) 🚀
              </h1>

              <div style={{ marginBottom: "25px" }}>
                <h3 style={{ color: "#333", marginBottom: "10px" }}>
                  📝 Description & Setup
                </h3>
                <p>
                  You are given a **maze** consisting of **N** cells, indexed
                  from <code>0</code> to <code>N-1</code>. The movement between
                  cells is unidirectional: each cell may have multiple entries
                  but is guaranteed to have **at most one exit**.
                </p>
                <p>
                  The connectivity is defined by an array, <code>Edge[]</code>,
                  of **N** integers. The value <code>Edge[i]</code> specifies
                  the cell index reachable from cell <code>i</code> in a single
                  step. If cell <code>i</code> has no exit, <code>Edge[i]</code>{" "}
                  is <code>-1</code>.
                </p>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#666",
                    borderLeft: "3px solid #d93025",
                    paddingLeft: "10px",
                    marginTop: "15px",
                  }}
                >
                  This setup describes a **functional graph**, where each node
                  (cell) has an out-degree of either 0 or 1.
                </p>
              </div>

              {/* --- Task Section --- */}
              <div style={{ marginBottom: "25px" }}>
                <h3
                  style={{
                    color: "#333",
                    marginTop: "0",
                    marginBottom: "10px",
                  }}
                >
                  🎯 Task: Find the Largest Sum Cycle
                </h3>
                <p>Find the **largest sum of a cycle** in the maze.</p>
                <p
                  style={{
                    background:
                      "#fff8e1" /* Light yellow background for key definition */,
                    padding: "10px 15px",
                    borderRadius: "6px",
                    borderLeft: "4px solid #f9a825" /* Orange border */,
                    fontWeight: "bold",
                  }}
                >
                  The **Sum of a Cycle** is the sum of the **cell indexes** of
                  all cells present in that cycle.
                </p>
                <p>
                  **Requirement:** If no cycle exists in the graph, you must
                  return <code>-1</code>.
                </p>
              </div>

              {/* --- Input/Output Sections --- */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  borderTop: "1px dashed #ccc",
                  paddingTop: "20px",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "#333", marginBottom: "10px" }}>
                    📥 Input Format
                  </h3>
                  <ul
                    style={{
                      background: "rgb(77, 77, 69)",
                      paddingLeft: "20px",
                      margin: "0",
                    }}
                  >
                    <li>
                      Line 1: The number of cells, <strong>N</strong>.
                    </li>
                    <li>
                      Line 2: A list of N space-separated integers representing
                      the <code>Edge[]</code> array.
                    </li>
                  </ul>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "#333", marginBottom: "10px" }}>
                    📤 Output Format
                  </h3>
                  <p>
                    A single integer: the largest sum of a cycle found in the
                    graph, or <code>-1</code> if no cycles exist.
                  </p>
                </div>
              </div>

              {/* --- Example Section --- */}
              <h2
                style={{
                  color: "#d93025",
                  marginTop: "30px",
                  borderTop: "1px dashed #ccc",
                  paddingTop: "20px",
                  marginBottom: "15px",
                  fontSize: "20px",
                }}
              >
                Examples
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {/* Example 1 */}
                <div>
                  <h4 style={{ color: "#555", marginBottom: "5px" }}>
                    Example 1: Cycle Found
                  </h4>
                  <div
                    style={{
                      background: "rgb(77, 77, 69)",
                      padding: "15px",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <strong>Input:</strong>
                    <pre
                      style={{
                        margin: "5px 0",
                        padding: "0",
                        fontSize: "14px",
                        fontFamily: "Menlo, Monaco, Consolas, monospace",
                      }}
                    >
                      {`23
4 4 1 4 13 8 8 8 0 8 14 9 15 11 -1 10 15 22 22 22 22 22 21`}
                    </pre>
                    <strong>Output:</strong>
                    <pre
                      style={{
                        margin: "5px 0",
                        padding: "0",
                        fontSize: "14px",
                        fontFamily: "Menlo, Monaco, Consolas, monospace",
                      }}
                    >
                      45
                    </pre>
                  </div>
                </div>

                {/* Example 2 */}
                <div>
                  <h4 style={{ color: "#555", marginBottom: "5px" }}>
                    Example 2: No Cycle
                  </h4>
                  <div
                    style={{
                      background: "rgb(77, 77, 69)",
                      padding: "15px",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <strong>Input:</strong>
                    <pre
                      style={{
                        margin: "5px 0",
                        padding: "0",
                        fontSize: "14px",
                        fontFamily: "Menlo, Monaco, Consolas, monospace",
                      }}
                    >
                      {` N = 4 <br />
                      Edge[] = {(2, 0, -1, 2)}`}
                    </pre>
                    <strong>Output:</strong>
                    <pre
                      style={{
                        margin: "5px 0",
                        padding: "0",
                        fontSize: "14px",
                        fontFamily: "Menlo, Monaco, Consolas, monospace",
                      }}
                    >
                      -1
                    </pre>
                    <p
                      style={{
                        fontSize: "0.9em",
                        color: "#666",
                        marginTop: "10px",
                      }}
                    >
                      **Path:** <code>1 &rarr; 0 &rarr; 2 &larr; 3</code>. Node
                      2 has multiple entries but no exit from 2 or 0. The graph
                      contains a path but no cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "nearestMeetingCell" && (
          <div
            className="problem-description"
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              lineHeight: "1.7",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#9334e6",
                  borderBottom: "3px solid #f9a825",
                  paddingBottom: "10px",
                  marginBottom: "20px",
                  fontSize: "28px",
                }}
              >
                Problem 3: Nearest Meeting Cell (Hard) 🧠
              </h1>

              {/* --- Description Section --- */}
              <div style={{ marginBottom: "25px" }}>
                <h3 style={{ color: "#333", marginBottom: "10px" }}>
                  📝 Description & Setup
                </h3>
                <p>
                  The environment is a maze of <strong>N</strong> cells, indexed
                  from <code>0</code> to <code>N-1</code>. The movement is
                  unidirectional: a cell can have many entrances but{" "}
                  <strong>at most one exit</strong>.
                </p>
                <p>
                  The connectivity is given by the array <code>Edge[]</code>,
                  where <code>Edge[i]</code> is the index of the cell reachable
                  from cell <code>i</code> in one step. A value of{" "}
                  <code>-1</code> means cell <code>i</code> has no exit.
                </p>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#666",
                    borderLeft: "3px solid #9334e6",
                    paddingLeft: "10px",
                    marginTop: "15px",
                  }}
                >
                  This structure represents a <strong>functional graph</strong>{" "}
                  where every node has an out-degree of 0 or 1.
                </p>
              </div>

              {/* --- Task Section --- */}
              <div style={{ marginBottom: "25px" }}>
                <h3
                  style={{
                    color: "#333",
                    marginTop: "0",
                    marginBottom: "10px",
                  }}
                >
                  🎯 Task: Find the Nearest Meeting Cell (Cm)
                </h3>
                <p>
                  Given two starting cells, <strong>C1</strong> and{" "}
                  <strong>C2</strong>, your task is to find the{" "}
                  <strong>closest cell Cm</strong> that can be reached from both
                  C1 and C2.
                </p>
                <p
                  style={{
                    background: "#f3e5f5",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    borderLeft: "4px solid #9334e6",
                    fontWeight: "bold",
                  }}
                >
                  The total distance to the meeting cell Cm is defined as the
                  sum of distances: Distance(C1, Cm) + Distance(C2, Cm). You
                  must choose the cell Cm that{" "}
                  <strong>minimizes this total distance</strong>.
                </p>
                <p>
                  <strong>Tie-breaker:</strong> If multiple cells result in the
                  minimum total distance, return the cell Cm with the{" "}
                  <strong>smallest index</strong>.
                </p>
                <p>
                  <strong>Requirement:</strong> If no common reachable cell
                  exists, return <code>-1</code>.
                </p>
              </div>

              {/* --- Input/Output Sections --- */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  borderTop: "1px dashed #ccc",
                  paddingTop: "20px",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "#333", marginBottom: "10px" }}>
                    📥 Input Format
                  </h3>
                  <ul
                    style={{
                      background: "rgb(77, 77, 69)",
                      paddingLeft: "20px",
                      margin: "0",
                    }}
                  >
                    <li>
                      Line 1: The number of cells, <strong>N</strong>.
                    </li>
                    <li>
                      Line 2: A list of N space-separated integers representing
                      the <code>Edge[]</code> array.
                    </li>
                    <li>
                      Line 3: Two space-separated integers, <strong>C1</strong>{" "}
                      and <strong>C2</strong>, whose nearest meeting cell is
                      sought.
                    </li>
                  </ul>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: "#333", marginBottom: "10px" }}>
                    📤 Output Format
                  </h3>
                  <p>
                    A single integer: the index of the{" "}
                    <strong>Nearest Meeting Cell (Cm)</strong>, or{" "}
                    <code>-1</code> if no common cell is reachable.
                  </p>
                </div>
              </div>

              {/* --- Example Section --- */}
              <h2
                style={{
                  color: "#9334e6",
                  marginTop: "30px",
                  borderTop: "1px dashed #ccc",
                  paddingTop: "20px",
                  marginBottom: "15px",
                  fontSize: "20px",
                }}
              >
                Sample Example
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div>
                  <h4 style={{ color: "#555", marginBottom: "5px" }}>
                    Sample Input:
                  </h4>
                  <pre
                    style={{
                      background: "rgb(77, 77, 69)",
                      padding: "15px",
                      borderRadius: "8px",
                      overflowX: "auto",
                      fontSize: "14px",
                      fontFamily: "Menlo, Monaco, Consolas, monospace",
                      border: "1px solid #ddd",
                    }}
                  >
                    {`23
4 4 1 4 13 8 8 8 0 8 14 9 15 11 -1 10 15 22 22 22 22 22 21
9 2`}
                  </pre>
                </div>

                <div>
                  <h4 style={{ color: "#555", marginBottom: "5px" }}>
                    Sample Output:
                  </h4>
                  <pre
                    style={{
                      background: "rgb(76 120 81)",
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontFamily: "Menlo, Monaco, Consolas, monospace",
                      border: "1px solid #bbdefb",
                    }}
                  >
                    {`4`}
                  </pre>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#666",
                      marginTop: "10px",
                    }}
                  >
                    The cell <strong>4</strong> is the meeting point that
                    minimizes Distance(9, 4) + Distance(2, 4).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <pre className="code-box">
        <code>{codeSamples[activeLang]?.[activeTab] || ""}</code>
      </pre>
    </div>
  );
};

export default JuspaySde;
