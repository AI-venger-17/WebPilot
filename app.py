import streamlit as st
import requests

st.set_page_config(page_title="MCP Web Assistant", layout="centered")

st.title("🕵️ MCP Web Assistant")

# Section 1: Web Search
st.header("🔍 Ask a Question")
query = st.text_input("Enter your query", key="search_query")

if st.button("Submit", key="submit_query") and query:
    with st.spinner("Thinking..."):
        try:
            response = requests.post("http://localhost:9090/api/search", json={"query": query})
            if response.status_code == 200:
                result = response.json()
                st.subheader("🔎 Search Result")
                st.write(result.get("output", "No output received"))
            else:
                st.error(f"❌ Error {response.status_code}: {response.text}")
        except Exception as e:
            st.error(f"❌ Failed to connect to backend: {e}")

st.markdown("---")

# Section 2: Summarize Webpage
st.header("📝 Summarize a Web Page")
summary_url = st.text_input("Enter a URL to summarize", key="summary_url")

if st.button("Summarize", key="summarize_button") and summary_url:
    with st.spinner("Summarizing..."):
        try:
            response = requests.post("http://localhost:9090/summarize", json={"url": summary_url})
            if response.status_code == 200:
                result = response.json()
                st.subheader("📄 Summary")
                st.write(result.get("summary", "No summary received"))
            else:
                st.error(f"❌ Error {response.status_code}: {response.text}")
        except Exception as e:
            st.error(f"❌ Failed to connect to backend: {e}")

st.markdown("---")

# Section 3: Open Website
st.header("🌐 Open Website in Browser")
open_url = st.text_input("Enter a website to open", key="open_url")

if st.button("Open Website", key="open_button") and open_url:
    with st.spinner("Opening website..."):
        try:
            response = requests.post("http://localhost:9090/open_website", json={"url": open_url})
            if response.status_code == 200:
                st.success(f"✅ {open_url} opened successfully!")
            else:
                st.error(f"❌ Error {response.status_code}: {response.text}")
        except Exception as e:
            st.error(f"❌ Failed to connect to backend: {e}")
