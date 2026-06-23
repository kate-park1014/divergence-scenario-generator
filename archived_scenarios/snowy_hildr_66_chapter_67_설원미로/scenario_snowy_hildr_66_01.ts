export const scenario_snowy_hildr_66_01 = {
	"scenario_id": "snowy_hildr_66_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "발끝에 닿는 모든 것이 눈이었다. 끝없는 설원의 시작.",
						"english": "Everything at my feet was snow. The beginning of an endless snowfield.",
						"japanese": "足元に触れるすべてが雪だった。終わりのない雪原の始まり。",
						"chinese": "脚下触及的一切都是雪。无尽雪原的开端。",
						"french": "Tout ce qui touchait mes pieds était de la neige. Le début d'une étendue de neige infinie.",
						"spanish": "Todo lo que tocaban mis pies era nieve. El comienzo de un campo de nieve interminable.",
						"vietnamese": "Mọi thứ chạm vào chân là tuyết. Khởi đầu của một cánh đồng tuyết bất tận.",
						"thai": "ทุกสิ่งที่ปลายเท้าสัมผัสคือหิมะ จุดเริ่มต้นของทุ่งหิมะอันกว้างใหญ่",
						"hindi": "मेरे पैरों तले सब कुछ बर्फ था। एक अंतहीन हिमक्षेत्र की शुरुआत।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 설원인가?",
						"english": "Is this... that snowfield?",
						"japanese": "ここが…あの雪原なのか？",
						"chinese": "这里是…那个雪原吗？",
						"french": "C'est ici... cette étendue de neige ?",
						"spanish": "¿Es este... ese campo de nieve?",
						"vietnamese": "Đây là… cánh đồng tuyết đó sao?",
						"thai": "ที่นี่... คือทุ่งหิมะนั้นหรือ?",
						"hindi": "क्या यह... वह हिमक्षेत्र है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "정말 들어가는 거야? 후회 안 할 자신 있어?",
						"english": "Are you really going in? Are you sure you won't regret it?",
						"japanese": "本当に入るのか？後悔しない自信はあるか？",
						"chinese": "你真的要进去吗？确定不会后悔？",
						"french": "Tu y vas vraiment ? Tu es sûr de ne pas le regretter ?",
						"spanish": "¿De verdad vas a entrar? ¿Estás seguro de que no te arrepentirás?",
						"vietnamese": "Cậu thực sự muốn vào sao? Chắc chắn sẽ không hối hận chứ?",
						"thai": "จะเข้าไปจริง ๆ เหรอ? มั่นใจว่าจะไม่เสียใจนะ?",
						"hindi": "क्या तुम सच में अंदर जा रहे हो? क्या तुम्हें यकीन है कि तुम्हें पछतावा नहीं होगा?"
					},
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그래. 돌아갈 곳도 없어.",
						"english": "Yes. There's nowhere to go back to.",
						"japanese": "ああ。もう戻る場所もない。",
						"chinese": "是的。也无处可退。",
						"french": "Oui. Il n'y a plus de retour possible.",
						"spanish": "Sí. No hay a dónde volver.",
						"vietnamese": "Phải. Cũng không còn đường quay lại.",
						"thai": "ใช่ ไม่มีที่ให้กลับไปแล้ว",
						"hindi": "हाँ। वापस जाने की कोई जगह नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊은 설원 속으로. 빛은 멀고 길은 혼란스러웠다.",
						"english": "Deeper into the snowfield. The light was distant, and the path was confusing.",
						"japanese": "さらに深い雪原の中へ。光は遠く、道は混乱していた。",
						"chinese": "更深入雪原。光线遥远，道路混乱。",
						"french": "Plus profondément dans l'étendue de neige. La lumière était lointaine, et le chemin était confus.",
						"spanish": "Más adentro en el campo de nieve. La luz estaba lejos y el camino era confuso.",
						"vietnamese": "Sâu hơn vào cánh đồng tuyết. Ánh sáng xa vời, con đường thì hỗn loạn.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ แสงอยู่ไกลออกไป และทางก็สับสน",
						"hindi": "हिमक्षेत्र में और गहरे। प्रकाश दूर था, और रास्ता भ्रमित करने वाला था।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "나침반이… 미쳤어. 빛에 가까워질수록 더 심해진다고.",
						"english": "The compass... it's gone wild. It gets worse the closer we get to the light.",
						"japanese": "コンパスが…おかしくなった。光に近づくほどひどくなる。",
						"chinese": "罗盘…疯了。越靠近光线，情况越糟。",
						"french": "La boussole... elle est devenue folle. Ça s'aggrave à mesure que l'on se rapproche de la lumière.",
						"spanish": "La brújula... se ha vuelto loca. Empeora cuanto más nos acercamos a la luz.",
						"vietnamese": "La bàn… nó điên rồi. Càng gần ánh sáng thì càng tệ hơn.",
						"thai": "เข็มทิศ... บ้าไปแล้ว ยิ่งเข้าใกล้แสงมากเท่าไร ก็ยิ่งแย่ลงเท่านั้น",
						"hindi": "कम्पास... पागल हो गया है। रोशनी के जितना करीब आते हैं, उतना ही खराब होता जाता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…신경 쓰지 마. 빛만 따라가.",
						"english": "...Don't mind it. Just follow the light.",
						"japanese": "…気にするな。光だけを追え。",
						"chinese": "……别管了。只管跟着光走。",
						"french": "...Ne t'en fais pas. Suis juste la lumière.",
						"spanish": "...No te preocupes. Solo sigue la luz.",
						"vietnamese": "...Đừng bận tâm. Cứ đi theo ánh sáng thôi.",
						"thai": "...ไม่ต้องสนใจ แค่ตามแสงไป.",
						"hindi": "...परवाह मत करो। बस रोशनी का पीछा करो."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 빛, 정말 믿을 수 있을까? 불안해.",
						"english": "This light, can we really trust it? I'm uneasy.",
						"japanese": "この光、本当に信じられるのか？不安だ。",
						"chinese": "这光，真的能相信吗？我感到不安。",
						"french": "Cette lumière, peut-on vraiment lui faire confiance ? Je suis inquiet.",
						"spanish": "¿Esta luz, podemos realmente confiar en ella? Estoy intranquilo.",
						"vietnamese": "Ánh sáng này, liệu chúng ta có thể tin tưởng nó không? Tôi thấy bất an.",
						"thai": "แสงนี้ เราจะเชื่อมันได้จริงเหรอ? ฉันไม่สบายใจเลย.",
						"hindi": "क्या हम इस रोशनी पर सच में भरोसा कर सकते हैं? मैं बेचैन हूँ."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "설명할 수 없는 냉기가 뼛속까지 스몄다. 단순한 추위가 아니었다.",
						"english": "An inexplicable chill seeped into my bones. It wasn't just cold.",
						"japanese": "説明できない冷気が骨の髄まで染み渡った。ただの寒さではなかった。",
						"chinese": "一股无法言喻的寒意侵入骨髓。那不仅仅是寒冷。",
						"french": "Un froid inexplicable s'est infiltré jusqu'aux os. Ce n'était pas un simple froid.",
						"spanish": "Un frío inexplicable se caló hasta los huesos. No era un frío simple.",
						"vietnamese": "Một luồng khí lạnh không thể giải thích thấm sâu vào tận xương tủy. Đó không phải là cái lạnh thông thường.",
						"thai": "ความเย็นที่อธิบายไม่ได้ซึมเข้ากระดูก ไม่ใช่แค่ความหนาวธรรมดา.",
						"hindi": "एक अकथनीय ठंड हड्डियों तक उतर गई। यह सिर्फ ठंड नहीं थी।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 추워지는 것 같지 않아? 뭔가 달라.",
						"english": "Doesn't it feel like it's getting colder? Something's different.",
						"japanese": "だんだん寒くなってきてないか？何かが違う。",
						"chinese": "难道不觉得越来越冷了吗？有些不对劲。",
						"french": "N'as-tu pas l'impression qu'il fait de plus en plus froid ? Quelque chose est différent.",
						"spanish": "¿No te parece que hace cada vez más frío? Algo es diferente.",
						"vietnamese": "Cậu không thấy càng ngày càng lạnh sao? Có gì đó khác lạ.",
						"thai": "ไม่รู้สึกว่ามันหนาวขึ้นเรื่อยๆ เหรอ? มีบางอย่างแปลกไป.",
						"hindi": "क्या तुम्हें नहीं लगता कि ठंड बढ़ती जा रही है? कुछ अलग है।"
					},
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "…응. 싸늘한 기운이 느껴져.",
						"english": "...Yes. I feel a chilling presence.",
						"japanese": "…ああ。冷たい気配を感じる。",
						"chinese": "……嗯。我感觉到一股寒意。",
						"french": "...Oui. Je ressens une présence glaciale.",
						"spanish": "...Sí. Siento una presencia helada.",
						"vietnamese": "...Ừ. Tôi cảm thấy một luồng khí lạnh lẽo.",
						"thai": "...อืม ฉันรู้สึกถึงพลังงานที่เยือกเย็น.",
						"hindi": "...हाँ। मुझे एक ठंडी मौजूदगी महसूस हो रही है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 무언가 불길한 그림자가 빠르게 스쳐 지나갔다.",
						"english": "Something ominous swiftly darted through the shadows.",
						"japanese": "闇の中で、何か不吉な影が素早く通り過ぎた。",
						"chinese": "黑暗中，一道不祥的影子快速闪过。",
						"french": "Quelque chose d'ominoux a rapidement filé dans l'obscurité.",
						"spanish": "Algo siniestro cruzó rápidamente en la oscuridad.",
						"vietnamese": "Một bóng đen đáng ngại nhanh chóng lướt qua trong bóng tối.",
						"thai": "ในความมืด มีเงาลางร้ายบางอย่างเคลื่อนผ่านไปอย่างรวดเร็ว.",
						"hindi": "अंधेरे में, कुछ अशुभ छाया तेज़ी से गुज़र गई।"
					},
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "북극광의 아름다운 빛 속에 감춰진 설명할 수 없는 냉기.",
						"english": "An inexplicable chill hidden within the beautiful light of the aurora.",
						"japanese": "オーロラの美しい光の中に隠された、説明できない冷気。",
						"chinese": "北极光美丽的光芒中，隐藏着无法言喻的寒意。",
						"french": "Un froid inexplicable caché dans la belle lumière des aurores boréales.",
						"spanish": "Un frío inexplicable oculto en la hermosa luz de la aurora boreal.",
						"vietnamese": "Một luồng khí lạnh không thể giải thích ẩn giấu trong ánh sáng tuyệt đẹp của cực quang.",
						"thai": "ความเย็นที่อธิบายไม่ได้ซ่อนอยู่ในแสงที่สวยงามของแสงเหนือ.",
						"hindi": "उत्तरी ध्रुवीय प्रकाश की सुंदर रोशनी में छिपी एक अकथनीय ठंड।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						1,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…온몸이 얼어붙는 것 같아. 이 빛이… 우릴 얼리는 걸까?",
						"english": "...My whole body feels like it's freezing. Is this light... freezing us?",
						"japanese": "…全身が凍りつくようだ。この光が…私たちを凍らせているのか？",
						"chinese": "……我全身都要冻僵了。这光……是在冻结我们吗？",
						"french": "...J'ai l'impression que tout mon corps gèle. Cette lumière... nous gèlerait-elle ?",
						"spanish": "...Siento que todo mi cuerpo se congela. ¿Esta luz... nos estará congelando?",
						"vietnamese": "...Cả người tôi như đóng băng vậy. Ánh sáng này... có phải đang đóng băng chúng ta không?",
						"thai": "...รู้สึกเหมือนร่างกายกำลังแข็งเลย แสงนี้...กำลังทำให้เราแข็งเหรอ?",
						"hindi": "...मेरा पूरा शरीर जम रहा है। क्या यह रोशनी... हमें जमा रही है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이정표 없는 길. 이 빛만이 유일해. 다른 선택지는 없어.",
						"english": "A path without signposts. This light is the only one. There are no other options.",
						"japanese": "道標のない道。この光だけが唯一だ。他に選択肢はない。",
						"chinese": "没有路标的道路。只有这道光。别无选择。",
						"french": "Un chemin sans repères. Cette lumière est la seule. Il n'y a pas d'autres options.",
						"spanish": "Un camino sin señales. Esta luz es la única. No hay otras opciones.",
						"vietnamese": "Con đường không có biển chỉ dẫn. Chỉ có ánh sáng này là duy nhất. Không còn lựa chọn nào khác.",
						"thai": "เส้นทางที่ไม่มีป้ายบอกทาง แสงนี้เป็นสิ่งเดียว ไม่มีทางเลือกอื่น.",
						"hindi": "बिना मील के पत्थर वाला रास्ता। यह रोशनी ही एकमात्र है। कोई और विकल्प नहीं है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만 이 냉기는… 존재를 깎아내리는 것 같다고.",
						"english": "But this chill... it feels like it's eroding our very existence.",
						"japanese": "しかし、この冷気は…存在を削り取っていくようだ。",
						"chinese": "但是这股寒意……感觉像是在侵蚀我们的存在。",
						"french": "Mais ce froid... on dirait qu'il ronge notre existence même.",
						"spanish": "Pero este frío... parece que está desgastando nuestra existencia.",
						"vietnamese": "Nhưng cái lạnh này... nó như đang bào mòn sự tồn tại của chúng ta vậy.",
						"thai": "แต่ความเย็นนี้...มันรู้สึกเหมือนกำลังกัดกร่อนการมีอยู่ของเรา.",
						"hindi": "लेकिन यह ठंड... ऐसा लगता है कि यह हमारे अस्तित्व को मिटा रही है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌아갈 순 없어.",
						"english": "There's no turning back.",
						"japanese": "戻れない。",
						"chinese": "无法回头。",
						"french": "Impossible de revenir en arrière.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không thể quay lại.",
						"thai": "กลับไปไม่ได้แล้ว",
						"hindi": "वापस नहीं जा सकते।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 그림자는 힘없이 쓰러졌다.",
						"english": "The unknown shadow fell powerless.",
						"japanese": "正体不明の影は力なく倒れた。",
						"chinese": "身份不明的影子无力地倒下了。",
						"french": "L'ombre inconnue tomba, impuissante.",
						"spanish": "La sombra desconocida cayó sin fuerzas.",
						"vietnamese": "Cái bóng không rõ danh tính yếu ớt đổ gục.",
						"thai": "เงาประหลาดล้มลงอย่างหมดสิ้นพลัง",
						"hindi": "अज्ञात छाया शक्तिहीन होकर गिर गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…또 다른 길 잃은 자가 올 뿐. 끝은 없다.",
						"english": "...Only another lost one will come. There is no end.",
						"japanese": "…また別の迷いし者が来るだけ。終わりはない。",
						"chinese": "…只会有另一个迷途者前来。没有尽头。",
						"french": "...Un autre perdu viendra, c'est tout. Il n'y a pas de fin.",
						"spanish": "...Solo vendrá otro perdido. No hay fin.",
						"vietnamese": "…Chỉ có thêm một người lạc lối khác đến. Không có hồi kết.",
						"thai": "...จะมีเพียงผู้หลงทางคนอื่นมาเท่านั้น ไม่มีที่สิ้นสุด",
						"hindi": "...बस कोई और भटका हुआ आएगा। इसका कोई अंत नहीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직도 아무것도 없는 건가.",
						"english": "...Is there still nothing?",
						"japanese": "…まだ何も無いのか。",
						"chinese": "…难道还是空无一物吗？",
						"french": "...Il n'y a toujours rien ?",
						"spanish": "¿...Todavía no hay nada?",
						"vietnamese": "…Vẫn chưa có gì sao?",
						"thai": "...ยังคงไม่มีอะไรเลยหรือ?",
						"hindi": "...क्या अभी भी कुछ नहीं है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빛은 여전히 이정표 없는 설원을 비추고 있었다.",
						"english": "The light still illuminated the unmarked snowfield.",
						"japanese": "光は依然として道標のない雪原を照らしていた。",
						"chinese": "光芒依然照耀着没有路标的雪原。",
						"french": "La lumière éclairait toujours la plaine enneigée sans repères.",
						"spanish": "La luz aún iluminaba el campo de nieve sin marcas.",
						"vietnamese": "Ánh sáng vẫn chiếu rọi cánh đồng tuyết không dấu vết.",
						"thai": "แสงยังคงส่องสว่างลานหิมะที่ไร้ซึ่งเครื่องหมาย",
						"hindi": "प्रकाश अभी भी बिना निशान वाले बर्फीले मैदान को रोशन कर रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "희미한 희망은 차가운 진실 속에서 그 실체를 드러낼 것이다.",
						"english": "Faint hope would reveal its true nature amidst cold truth.",
						"japanese": "微かな希望は、冷たい真実の中でその実体を現すだろう。",
						"chinese": "微弱的希望将在冰冷的真相中显露其真面目。",
						"french": "L'espoir ténu révélerait sa vraie nature au milieu de la froide vérité.",
						"spanish": "La tenue esperanza revelaría su verdadera naturaleza en medio de la fría verdad.",
						"vietnamese": "Hy vọng mờ nhạt sẽ tiết lộ bản chất thật của nó giữa sự thật lạnh lùng.",
						"thai": "ความหวังอันริบหรี่จะเผยธาตุแท้ของมันท่ามกลางความจริงอันหนาวเหน็บ",
						"hindi": "मंद आशा ठंडी सच्चाई के बीच अपनी असली प्रकृति प्रकट करेगी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠이 모든 것을 삼켰다. 다시 시작해야 했다.",
						"english": "Darkness swallowed everything. I had to start over.",
						"japanese": "闇がすべてを飲み込んだ。やり直すしかなかった。",
						"chinese": "黑暗吞噬了一切。我必须重新开始。",
						"french": "Les ténèbres ont tout englouti. Il fallait tout recommencer.",
						"spanish": "La oscuridad lo envolvió todo. Tuve que empezar de nuevo.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ. Tôi phải bắt đầu lại.",
						"thai": "ความมืดกลืนกินทุกสิ่ง ฉันต้องเริ่มต้นใหม่",
						"hindi": "अंधेरे ने सब कुछ निगल लिया। मुझे फिर से शुरू करना पड़ा।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "절망은 새로운 길을 만들지. 다시 와라.",
						"english": "Despair forges new paths. Return.",
						"japanese": "絶望は新たな道を生む。再び来い。",
						"chinese": "绝望开辟新路。再来吧。",
						"french": "Le désespoir ouvre de nouvelles voies. Reviens.",
						"spanish": "La desesperación forja nuevos caminos. Regresa.",
						"vietnamese": "Tuyệt vọng tạo ra lối đi mới. Hãy quay lại.",
						"thai": "ความสิ้นหวังสร้างเส้นทางใหม่ กลับมาอีกครั้ง",
						"hindi": "निराशा नए रास्ते बनाती है। वापस आओ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わってない。諦めない。",
						"chinese": "……还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "빛이 가장 강렬하게 모인 곳. 정체 모를 그림자가 기다리고 있었다.",
						"english": "Where light converged most intensely. An unknown shadow awaited.",
						"japanese": "光が最も強く集まる場所。正体不明の影が待っていた。",
						"chinese": "光芒最强烈汇聚之地。一个身份不明的影子正在等待。",
						"french": "Là où la lumière convergeait le plus intensément. Une ombre inconnue attendait.",
						"spanish": "Donde la luz convergía con mayor intensidad. Una sombra desconocida aguardaba.",
						"vietnamese": "Nơi ánh sáng tụ hội mãnh liệt nhất. Một cái bóng không rõ danh tính đang chờ đợi.",
						"thai": "ที่ซึ่งแสงรวมตัวกันอย่างเข้มข้นที่สุด เงาประหลาดรออยู่",
						"hindi": "जहाँ प्रकाश सबसे तीव्र रूप से एकत्रित था। एक अज्ञात छाया प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길 잃은 자여, 이 이상은 없다. 허무를 좇는가?",
						"english": "Lost one, there is nothing beyond this. Do you pursue emptiness?",
						"japanese": "迷いし者よ、これ以上はない。虚無を追うのか？",
						"chinese": "迷途者，此地再无他物。你追逐的是虚无吗？",
						"french": "Âme perdue, il n'y a rien au-delà. Poursuis-tu le néant ?",
						"spanish": "Alma perdida, no hay nada más allá. ¿Persigues el vacío?",
						"vietnamese": "Người lạc lối, không còn gì hơn thế nữa. Ngươi đang theo đuổi hư vô ư?",
						"thai": "ผู้หลงทาง ไม่มีอะไรเกินกว่านี้แล้ว เจ้ากำลังแสวงหาความว่างเปล่าหรือ?",
						"hindi": "हे भटके हुए, इससे आगे कुछ नहीं। क्या तुम शून्य का पीछा कर रहे हो?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… 이 빛을 지키는 건가?",
						"english": "Are you... guarding this light?",
						"japanese": "お前が…この光を守っているのか？",
						"chinese": "你…在守护这道光吗？",
						"french": "Es-tu… le gardien de cette lumière ?",
						"spanish": "¿Tú… proteges esta luz?",
						"vietnamese": "Ngươi… đang bảo vệ ánh sáng này sao?",
						"thai": "เจ้า… เป็นผู้พิทักษ์แสงนี้หรือ?",
						"hindi": "क्या तुम… इस प्रकाश की रक्षा कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 좇는 것은 허상일 뿐. 깨어나라.",
						"english": "What you chase is but an illusion. Awaken.",
						"japanese": "お前が追うものは幻影に過ぎない。目覚めよ。",
						"chinese": "你所追逐的不过是虚妄。醒来吧。",
						"french": "Ce que tu poursuis n'est qu'une illusion. Réveille-toi.",
						"spanish": "Lo que persigues es solo una ilusión. Despierta.",
						"vietnamese": "Thứ ngươi theo đuổi chỉ là hư ảnh. Tỉnh dậy đi.",
						"thai": "สิ่งที่เจ้าไล่ตามเป็นเพียงภาพลวงตา ตื่นขึ้นซะ",
						"hindi": "जो तुम पीछा कर रहे हो, वह केवल एक भ्रम है। जागो।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 희미한 북극광만이 길을 비췄다.",
			"무언가를 찾아 나섰지만, 무엇을 좇는지조차 희미했다.",
			"나침반은 방향을 잃었고, 모든 것이 우리를 속이는 듯했다.",
			"이 길의 끝에… 진실이 있을까? 아니면 또 다른 환상일까."
		],
		"english": [
			"Endless snowfield. Only the faint aurora lit the way.",
			"We set out to find something, but what we sought was unclear.",
			"The compass lost its bearing, and everything seemed to deceive us.",
			"At the end of this path... will there be truth? Or just another illusion."
		],
		"japanese": [
			"果てしなく広がる雪原。微かなオーロラだけが道を照らしていた。",
			"何かを探しに出たが、何を追っているのかさえ曖昧だった。",
			"コンパスは方角を見失い、すべてが私たちを欺いているようだった。",
			"この道の先に…真実があるのだろうか？それとも、また別の幻想か。"
		],
		"chinese": [
			"一望无际的雪原。只有微弱的北极光照亮了道路。",
			"我们出发去寻找什么，但追寻之物却模糊不清。",
			"罗盘失去了方向，一切似乎都在欺骗我们。",
			"这条路的尽头…是真相吗？还是又一个幻象？"
		],
		"french": [
			"Une étendue de neige infinie. Seules les faibles aurores boréales éclairaient le chemin.",
			"Nous étions partis à la recherche de quelque chose, mais ce que nous cherchions était flou.",
			"La boussole avait perdu le nord, et tout semblait nous tromper.",
			"Au bout de ce chemin... la vérité nous attend-elle ? Ou juste une autre illusion."
		],
		"spanish": [
			"Un campo de nieve interminable. Solo la tenue aurora boreal iluminaba el camino.",
			"Salimos en busca de algo, pero lo que perseguíamos era indistinto.",
			"La brújula perdió su rumbo, y todo parecía engañarnos.",
			"Al final de este camino... ¿habrá verdad? ¿O solo otra ilusión?"
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận. Chỉ có ánh cực quang mờ ảo chiếu sáng con đường.",
			"Chúng tôi lên đường tìm kiếm thứ gì đó, nhưng ngay cả thứ chúng tôi tìm kiếm cũng mờ mịt.",
			"La bàn mất phương hướng, mọi thứ dường như đang lừa dối chúng tôi.",
			"Cuối con đường này… liệu có phải là sự thật? Hay chỉ là một ảo ảnh khác."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด มีเพียงแสงเหนือที่เลือนรางคอยส่องทาง",
			"ออกเดินทางตามหาสิ่งใดสิ่งหนึ่ง แต่สิ่งที่ตามหากลับเลือนราง",
			"เข็มทิศไร้ทิศทาง ทุกสิ่งราวกับหลอกลวงเรา",
			"ที่ปลายทางนี้... จะมีความจริงอยู่ไหม? หรือเป็นเพียงภาพลวงตาอีกครั้ง"
		],
		"hindi": [
			"अथाह हिमक्षेत्र। धुंधली उत्तरी रोशनी ही रास्ता दिखा रही थी।",
			"कुछ ढूँढने निकले थे, पर क्या ढूँढ रहे थे, वह भी अस्पष्ट था।",
			"कम्पास ने दिशा खो दी थी, और सब कुछ हमें धोखा दे रहा था।",
			"इस रास्ते के अंत में... क्या सच होगा? या एक और भ्रम?"
		]
	}
} as const;
