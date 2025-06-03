import streamlit as st
import requests

# ----------------- Configuration ----------------- #
BACKEND_URL = "http://localhost:9090"

st.set_page_config(page_title="MCP Web Assistant", layout="centered")
st.title("🕵️ MCP Web Assistant")

# ----------------- Helper Function ----------------- #
def post_request(endpoint: str, payload: dict):
    try:
        response = requests.post(f"{BACKEND_URL}{endpoint}", json=payload)
        if response.status_code == 200:
            return response.json(), None
        return None, f"❌ Error {response.status_code}: {response.text}"
    except Exception as e:
        return None, f"❌ Failed to connect to backend: {e}"

# ----------------- Section 1: Web Search ----------------- #
st.header("🔍 Ask a Question")
query = st.text_input("Enter your query", key="search_query")

if st.button("Submit", key="submit_query") and query:
    with st.spinner("Thinking..."):
        result, error = post_request("/api/search", {"query": query})
        if error:
            st.error(error)
        else:
            st.subheader("🔎 Search Result")
            st.write(result.get("output", "No output received"))

st.divider()

# ----------------- Section 2: Open Website ----------------- #
st.header("🌐 Open Website in Browser")
open_url = st.text_input("Enter a website to open", key="open_url")

if st.button("Open Website", key="open_button") and open_url:
    with st.spinner("Opening website..."):
        result, error = post_request("/open_website", {"url": open_url})
        if error:
            st.error(error)
        else:
            st.success(f"✅ {open_url} opened successfully!")


st.divider()
# ----------------- Section 3: Summarize Web Page ----------------- #
st.header("📝 Summarize a Web Page")
summary_url = st.text_input("Enter a URL to summarize", key="summary_url")

if st.button("Summarize", key="summarize_button") and summary_url:
    with st.spinner("Summarizing..."):
        result, error = post_request("/summarize", {"url": summary_url})
        if error:
            st.error(error)
        else:
            st.subheader("📄 Summary")
            st.write(result.get("summary", "No summary received"))


